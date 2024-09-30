function cars(commands) {
    const objects = {};

    function create(name, parentName) {
        if (parentName) {
            objects[name] = Object.create(objects[parentName]);
        } else {
            objects[name] = {};
        }
    }

    function set(name, key, value) {
        objects[name][key] = value;
    }

    function print(name) {
        const result = [];
        for (const key in objects[name]) {
            result.push(`${key}:${objects[name][key]}`);
        }
        console.log(result.join(','));
    }

    commands.forEach(command => {
        const parts = command.split(' ');
        const action = parts[0];
        const name = parts[1];

        if (action === 'create') {
            if (parts[2] === 'inherit') {
                create(name, parts[3]);
            } else {
                create(name);
            }
        } else if (action === 'set') {
            set(name, parts[2], parts[3]);
        } else if (action === 'print') {
            print(name);
        }
    });
}



cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
)