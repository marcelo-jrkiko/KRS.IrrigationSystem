import { defineStore } from 'pinia'

/** Global state */
type GlobalState = {
  _showLoader: boolean;
  _loaderMessage: string;
  __loader_hide_timer: NodeJS.Timeout | undefined;
}

/** Global Store */
export default defineStore('global', {
  // Default Global State
  state: (): GlobalState => ({
    _showLoader: false,
    _loaderMessage: "",
    __loader_hide_timer: undefined
  }),
  // Getters
  getters: {
    loaderMessage: (s): string => s._loaderMessage,
    isLoaderVisible: (b): boolean => b._showLoader
  },
  // Actions
  actions: {
    setLoader(message: string = '', isVisible: boolean) {
      clearTimeout(this.__loader_hide_timer);
      this._loaderMessage = message
      this._showLoader = isVisible;
    },
    hideLoader() {
      this.__loader_hide_timer = setTimeout(() => {
        this._showLoader = false;
      }, 1000);
    }
  },

  persist: {
    key: 'frontend-store',
    storage: window.localStorage,
  },
})
