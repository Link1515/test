function Promise(executor) {
  // 添加屬性
  this.PromiseState = 'pending';
  this.PromiseResult = null;
  this.callback = {};

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
    if (self.callback.onResolve) {
      self.callback.onResolve(data);
    }
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
    if (self.callback.onReject) {
      self.callback.onReject(data);
    }
  }

  // 處理拋出錯誤
  try {
    // 同步調用"執行器函數"
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

Promise.prototype.then = function (onResolve, onReject) {
  if (this.PromiseState === 'fulfilled') {
    onResolve(this.PromiseResult);
  }
  if (this.PromiseState === 'rejected') {
    onReject(this.PromiseResult);
  }
  // 判斷 pending 狀態
  if (this.PromiseState === 'pending') {
    this.callback = {
      onResolve,
      onReject
    };
  }
};
