<script lang="ts">
import { useGlobal } from '../../../plugins/Store';

export default {
    name: 'LoaderOverlay',
    computed: {
        isVisible() {
            const state = useGlobal();
            return state.isLoaderVisible;
        },
        message() {
            const state = useGlobal();
            return state._loaderMessage;
        }
    }
}
</script>

<template>
    <div v-if="isVisible" class="page-overlay">
        <div class="page-overlay-inner">
            <div class="text-center">
                <i class="fa-solid fa-spinner fa-spin spinner"></i>
                <p id="loading-label">{{ message }}</p>
            </div>
        </div>
    </div>
</template>

<style>
.page-overlay {
    position: absolute;
    background: #0000008c;
    height: 100%;
    width: 100%;
    z-index: 9999;
}

.page-overlay-inner {
    position: relative;
    top: 45%;
}

.spinner {
    color: white;
    font-size: 52px;
    margin-bottom: 1rem;
}

#loading-label {
    color: white;
    font-size: 24px;
}
</style>