export var settings = {

    // Settings to use when Appverse Mobile is loaded
    appverseMobile: {
        "LOGGING_CONFIG": {
            "ServerEnabled": false,
            "EnabledLogLevel": true,
            "EnabledErrorLevel": true,
            "EnabledDebugLevel": false,
            "EnabledWarnLevel": true,
            "EnabledInfoLevel": true,
            "LogDateTimeFormat": "%Y-%M-%d %h:%m:%s:%z",
            "LogTextFormat": ""
        },
        "CACHE_CONFIG": {
            "ScopeCache_duration": 10000,
            "ScopeCache_capacity": 10,
            "BrowserStorageCache_Enabled": true,
            "BrowserStorage_type": "2",
            "HttpCache_Enabled": true,
            "HttpCache_duration": 20000,
            "HttpCache_capacity": 10,
            "IndexedDBCache_Enabled": false
        },
        "SERVERPUSH_CONFIG": {
            "BaseUrl": "http://localhost:3000",
            "ListenedPort": "3000",
            "Resource": "socket.io",
            "ConnectTimeout": "10000",
            "TryMultipleTransports": true,
            "Reconnect": true,
            "ReconnectionDelay": 1000,
            "ReconnectionLimit": "Infinity",
            "MaxReconnectionAttempts": 5,
            "SyncDisconnectOnUnload": false,
            "AutoConnect": true,
            "FlashPolicyPort": "",
            "ForceNewConnection": false
        },
        "REST_CONFIG": {
            "BaseUrl": "/api/v1",
            "ExtraFields": [],
            "ParentLess": false,
            "NoCacheHttpMethods": {
                "get": false,
                "post": true,
                "put": false,
                "delete": true,
                "option": false
            },
            "ElementTransformer": [],
            "RequestInterceptor": null,
            "FullRequestInterceptor": null,
            "RestangularFields": {
                "id": "id",
                "route": "route"
            },
            "MethodOverriders": [],
            "DefaultRequestParams": {},
            "FullResponse": false,
            "DefaultHeaders": {},
            "RequestSuffix": ".json",
            "UseCannonicalId": false,
            "EncodeIds": true
        },
        "AD_CONFIG": {
            "ConsumerKey": "",
            "ConsumerSecret": ""
        },
        "I18N_CONFIG": {
            "PreferredLocale": "en-GB",
            "DetectLocale": true
        }
    },

    //Settings to use when mobile browser is detected
    mobileBrowser: {
        "LOGGING_CONFIG": {
            "ServerEnabled": false,
            "EnabledLogLevel": true,
            "EnabledErrorLevel": true,
            "EnabledDebugLevel": false,
            "EnabledWarnLevel": true,
            "EnabledInfoLevel": true
        },
        "CACHE_CONFIG": {
            "ScopeCache_duration": 10000,
            "ScopeCache_capacity": 10,
            "BrowserStorageCache_Enabled": true,
            "BrowserStorage_type": "2",
            "HttpCache_Enabled": true,
            "HttpCache_duration": 20000,
            "HttpCache_capacity": 10,
            "IndexedDBCache_Enabled": false
        },
        "SERVERPUSH_CONFIG": {
            "BaseUrl": "http://localhost:3000",
            "ListenedPort": "3000",
            "Resource": "socket.io",
            "ConnectTimeout": "10000",
            "TryMultipleTransports": true,
            "Reconnect": true,
            "ReconnectionDelay": 1000,
            "ReconnectionLimit": "Infinity",
            "MaxReconnectionAttempts": 5,
            "SyncDisconnectOnUnload": false,
            "AutoConnect": true,
            "FlashPolicyPort": "",
            "ForceNewConnection": false
        },
        "REST_CONFIG": {
            "BaseUrl": "/api/v1",
            "ExtraFields": [],
            "ParentLess": false,
            "NoCacheHttpMethods": {
                "get": false,
                "post": true,
                "put": false,
                "delete": true,
                "option": false
            },
            "ElementTransformer": [],
            "RequestInterceptor": null,
            "FullRequestInterceptor": null,
            "RestangularFields": {
                "id": "id",
                "route": "route"
            },
            "MethodOverriders": [],
            "DefaultRequestParams": {},
            "FullResponse": false,
            "DefaultHeaders": {},
            "RequestSuffix": ".json",
            "UseCannonicalId": false,
            "EncodeIds": true
        }
    },

    // Application general environment
    // Overrides defaults and mobile settings
    environment: {
        "LOGGING_CONFIG": {
            "ServerEnabled": false,
            "EnabledLogLevel": true,
            "EnabledErrorLevel": true,
            "EnabledDebugLevel": true,
            "EnabledWarnLevel": true,
            "EnabledInfoLevel": true,
            "LogDateTimeFormat": "%Y-%M-%d %h:%m:%s:%z",
            "LogTextFormat": ""
        },
        "CACHE_CONFIG": {
            "ScopeCache_duration": 10000,
            "ScopeCache_capacity": 10,
            "BrowserStorageCache_Enabled": true,
            "BrowserStorage_type": "2",
            "HttpCache_Enabled": true,
            "HttpCache_duration": 20000,
            "HttpCache_capacity": 10,
            "IndexedDBCache_Enabled": true
        },
        "SERVERPUSH_CONFIG": {
            "BaseUrl": "http://localhost:3000",
            "ListenedPort": "3000",
            "Resource": "socket.io",
            "ConnectTimeout": "10000",
            "TryMultipleTransports": true,
            "Reconnect": true,
            "ReconnectionDelay": 1000,
            "ReconnectionLimit": "Infinity",
            "MaxReconnectionAttempts": 5,
            "SyncDisconnectOnUnload": false,
            "AutoConnect": true,
            "FlashPolicyPort": "",
            "ForceNewConnection": false
        },
        "AD_CONFIG": {
            "ConsumerKey": "",
            "ConsumerSecret": ""
        },
        "I18N_CONFIG": {
            "PreferredLocale": "en-US",
            "DetectLocale": true
        },
        "WEBSOCKETS_CONFIG": {
            "WS_ECHO_URL": "ws://echo.websocket.org",
            "WS_CPU_URL": "ws://localhost:8080/websocket/services/websocket/statistics/get/cpuload",
            "WS_CPU_INTERVAL": 30,
            "WS_CONNECTED": "Connected",
            "WS_DISCONNECTED": "Disconnected",
            "WS_CONNECTING": "Connecting Websocket...",
            "WS_CLOSED": "Websocket connection closed",
            "WS_CLOSING": "Websocket connection closing...",
            "WS_OPEN": "Websocket connection is open",
            "WS_UNKNOWN": "Websocket status is unknown",
            "WS_FAILED_CONNECTION": "Failed to open a Websocket connection",
            "WS_NOT_SUPPORTED": "HTML5 Websockets specification is not supported in this browser.",
            "WS_SUPPORTED": "HTML5 Websockets specification is supported in this browser."
        }
    }
}