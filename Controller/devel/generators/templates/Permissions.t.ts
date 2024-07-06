export const Permissions = {
    Save: "__NMSPACE__.__MODEL__.Save",
    Read: "__NMSPACE__.__MODEL__.Read",
    Delete: "__NMSPACE__.__MODEL__.Delete"
}

export const Permissions_Desc = [
    {
        name: 'Can Create/Update the __MODEL__',
        key: Permissions.Save
    },
    {
        name: 'Can Delete the __MODEL__',
        key: Permissions.Delete
    },
    {
        name: 'Can Read/Find/Get the __MODEL__',
        key: Permissions.Read
    }
]