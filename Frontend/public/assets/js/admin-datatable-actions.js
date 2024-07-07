/**
 * Ações em JS Nativo para os Botões do DataTable
 * 
 */

function Native_Item_Edit(e, modelId) { // eslint-disable-line
    window.pageRef.onEditTableItem(modelId);
}

function Native_Item_Delete(e, modelId) { // eslint-disable-line
    window.pageRef.onDeleteTableItem(modelId);
}