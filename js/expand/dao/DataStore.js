import {AsyncStorage} from 'react-native';

export default class DataStore {
    // 保存数据
    saveData(url, data, callback){
        if(!data || !url) return;
        AsyncStorage.setItem(url,JSON.stringify(this._wrapData(data)),callback)
    }
    _wrapData(data){
        return {data:data, timestamp:new Date().getTime()};
    }
    checkTimestampValid(timestamp){
        const currentDate = new Date();
        const targetData = new Date();
        targetData.setTime(timestamp);
        if(currentDate.getMonth()!==targetData.getMonth()) return false;
        if(currentDate.getDate()!==targetData.getDate()) return false;
        if(currentDate.getHours() - targetData.getHours() > 4) return false;
        return true;
    }
    // 获取本地资源
    fetchLocalData(url){
        return new Promise((resolve,reject) => {
            AsyncStorage.getItem(url,(error,result)=>{
                if(!error){
                    try{
                        resolve(JSON.parse(result));
                    }catch(e){
                        reject(e);
                        console.error(e);
                    }
                }else{
                    reject(error);
                    console.error(error);
                }
            })
        })
    }
    // 获取网络数据
    fetchNetData(url){
        return new Promise((resolve,reject) => {
            fetch(url)
            .then(response=>{
                if(response.ok){
                    return response.text();
                }
                throw new Error('netWork is bad');
            })
            .then(responseData=>{
                this.saveData(url,responseData);
                resolve(responseData)
            })
            .catch(e=>{
                reject(e);
            })
        })
    }
    fetchData(url){
        return new Promise((resolve,reject)=>{
            this.fetchLocalData(url).then((wrapData)=>{
                if(wrapData && this.checkTimestampValid(wrapData.timestamp)) {
                    resolve(wrapData);
                }else{
                    this.fetchNetData(url).then(data=>{
                        let d = this._wrapData(data);
                        this.saveData(url,d)
                        resolve(d);
                    }).catch(e=>{
                        reject(e)
                    })
                }
            }).catch(e=>{
                this.fetchNetData(url).then(data=>{
                    let d = this._wrapData(data);
                    this.saveData(url,d)
                    resolve(d);
                }).catch(e=>{
                    reject(e)
                })
            })
        })
    }
}