export const isMobile = () => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}

export function getAssetUrl(fileName: string) {
    return import.meta.env.VITE_ASSETS_URL + "/" + fileName;
}