let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMTg4MzE4OCwianRpIjoiMGZlNTA1NmMtOWIzYy00YmI3LWE4YzQtNDBjZTVkMDA4ZWFlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IlJhbmdlcnMgMTM0IFBvc3NlIiwibmJmIjoxNzAxODgzMTg4LCJleHAiOjE3MzM0MTkxODh9.0K8IMPkpzBf5wA63S7WOU1IVysIRzAa-kd14Bum6qkQ"
let userId = localStorage.getItem('uuid') //grabbing the uuid from Google Authentication 



export const serverCalls = {

    getShop: async () => {
        // api call consist of 1-4 things 
        // 1. url (required)
        // 2. method (optional it will default to GET)
        // 3. headers (optional but usually there) authentication type & type of data 
        // 4. body (optional usually only on a POST, PUT and sometimes DELETE)
        const response = await fetch(`https://rangers134-shopas.onrender.com/api/shop`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status 
        }

        return await response.json()

    }
}