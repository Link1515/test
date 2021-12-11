class Promise {
  // 構造方法
  constructor(executor) {
    // 添加屬性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    // 用陣列處理多個回調
    this.callbacks = [];

    // 保存實例的 this 值
    const self = this;

    // resolve 函數
    function resolve(data) {
      // 判斷狀態(狀態只能修改一次)
      if (self.PromiseState !== 'pending') return;
      // 1. 修改物件的狀態 (PromiseState)
      self.PromiseState = 'fulfilled';
      // 2. 設置物件結果值 (PromiseResult)
      self.PromiseResult = data;
      // 異步時，調用成功的then回調函數
      setTimeout(() => {
        self.callbacks.forEach((item) => {
          item.onResolve(data);
        });
      });
    }

    // reject 函數
    function reject(data) {
      // 判斷狀態(狀態只能修改一次)
      if (self.PromiseState !== 'pending') return;
      // 1. 修改物件的狀態 (PromiseState)
      self.PromiseState = 'rejected';
      // 2. 設置物件結果值 (PromiseResult)
      self.PromiseResult = data;
      // 異步時，調用失敗的then回調函數
      setTimeout(() => {
        self.callbacks.forEach((item) => {
          item.onReject(data);
        });
      });
    }

    // 處理拋出錯誤
    try {
      // 同步調用"執行器函數"
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  // then 方法
  then(onResolve, onReject) {
    const self = this;
    // 判斷回調函數參數
    if (typeof onReject !== 'function') {
      onReject = (reason) => {
        throw reason;
      };
    }
    if (typeof onResolve !== 'function') {
      onResolve = (value) => value;
    }
    return new Promise((resolve, reject) => {
      function callback(type) {
        try {
          let result = type(self.PromiseResult);
          if (result instanceof Promise) {
            result.then(
              (v) => {
                resolve(v);
              },
              (r) => {
                reject(r);
              }
            );
          } else {
            resolve(result);
          }
        } catch (err) {
          reject(err);
        }
      }
      // 同步時，成功調用
      if (this.PromiseState === 'fulfilled') {
        setTimeout(() => {
          callback(onResolve);
        });
      }
      // 同步時，失敗調用
      if (this.PromiseState === 'rejected') {
        setTimeout(() => {
          callback(onReject);
        });
      }
      // 判斷 pending 狀態
      // Promise 異步時，存取回調
      if (this.PromiseState === 'pending') {
        this.callbacks.push({
          onResolve: function () {
            callback(onResolve);
          },
          onReject: function () {
            callback(onReject);
          }
        });
      }
    });
  }

  // catch 方法
  catch(onReject) {
    return this.then(undefined, onReject);
  }

  // Promise 的靜態成員 (Promise本身的方法)
  static resolve(value) {
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(
          (v) => {
            resolve(v);
          },
          (r) => {
            reject(r);
          }
        );
      } else {
        resolve(value);
      }
    });
  }

  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  }

  static all(promises) {
    return new Promise((resolve, reject) => {
      let count = 0;
      let arr = [];
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (v) => {
            count++;
            arr[i] = v;
            if (count === promises.length) {
              resolve(arr);
            }
          },
          (r) => {
            reject(r);
          }
        );
      }
    });
  }

  static race(promises) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        // 那個 Promise 先改變狀態，就決定結果
        promises[i].then(
          (v) => {
            resolve(v);
          },
          (r) => {
            reject(r);
          }
        );
      }
    });
  }
}
