const appendToTerminal = function(text){
    let terminal_code = document.querySelector('.teminal-code');
    terminal_code.innerText = terminal_code.innerText + text;
}

document.querySelector('.send-btn').onclick = function(){
    let command = document.querySelector('.send-input').value;
    appendToTerminal('\nroot@decentra.app~# '+command+'\n')
    decentra.makeCommand(command);
}

const showApp = function(list){
    document.querySelector('.app-title').innerText = list.name;
    document.querySelector('.app-install-btn').onclick = function(){
        decentra.installApp(list.path);
    }
}

const sendListOfApps = function(list){
    let appList = JSON.parse(list);
    let appListView = document.querySelector('.apps-view');
    appListView.innerHTML = '';
    for (let a in appList){
        let app = appList[a];
        let newApp = document.createElement('div');
        newApp.classList.add('app-name');
        newApp.innerHTML = '<div class="title">' + app.name + '</div>';
        appListView.append(newApp);
        newApp.onclick = function(){
            showApp(app);
        }
    }
}