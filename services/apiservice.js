const axios = require('axios');

export const getMenu = async () => {
    let res = await axios.get(
        "https://app.tillpos.co/api/v2.6/menu", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "tenantId": "urban piper",
            "outletId": "6b154ff8-115b-4965-87df-6181d59f6898",
            "correlationId": "9a18f0c7-1ded-4be6-a4b9-d134db2ee562",
            "deviceId": "2bc689ce-1c07-4678-be19-0114a48e5466",
            "sessionId": "47ed498a-fb7d-4918-8255-e381b87e36c8",
            "userId": "d3e09643-5510-c36a-b58a-795f4b121a5f",
            "authorization": "Basic dXJiYW5AcGlwZXIuY29tOmludGVncmF0aW9u",
            "x-ApiKey": "5cb2d914-42b1-46ba-9063-dbba8bc4d5ad"
        }
    },
    )
    let { data } = res.data;
    return data;
};

export const getOrders = async () => {
    return await axios.get(
        "https://app.tillpos.co/api/v2.6/Orders", {
        headers: {
            'Accept': 'application/json',
            "tenantId": "urban piper",
            "outletId": "6b154ff8-115b-4965-87df-6181d59f6898",
            "correlationId": "9a18f0c7-1ded-4be6-a4b9-d134db2ee562",
            "deviceId": "2bc689ce-1c07-4678-be19-0114a48e5466",
            "sessionId": "47ed498a-fb7d-4918-8255-e381b87e36c8",
            "userId": "d3e09643-5510-c36a-b58a-795f4b121a5f",
            "x-ApiKey": "5cb2d914-42b1-46ba-9063-dbba8bc4d5ad"
        }
    }).then(res => res.data);
};
