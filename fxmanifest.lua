fx_version 'cerulean';
game 'gta5';

author 'JustGodWork';
description 'TS Template for FiveM with Vue 3';
version '1.0.0';

ui_page 'src/client/index.html';

client_scripts {
    'build/client/client.js'
}

server_scripts {
    'build/server/server.js'
}

files {
    'src/client/index.html',
    'build/client/client.js',
    'build/client/*.js.map'  -- Pour le debugging
}
