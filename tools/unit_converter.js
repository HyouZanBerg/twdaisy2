const components = {
    results:{},
    inputs:{},
    frominputs:{},
    toinputs:{}
};

['length','area','volume','mass'].forEach(item => {
    components.results[item] = document.getElementById(item+'-result');
});
['box1input', 'box2input', 'box3input', 'box4input'].forEach(item => {
    components.inputs[item] = document.getElementById(item);
});
['box1frominput', 'box2frominput', 'box3frominput', 'box4frominput'].forEach(item => {
    components.frominputs[item] = document.getElementById(item);
});
['box1toinput', 'box2toinput', 'box3toinput', 'box4toinput'].forEach(item => {
    components.toinputs[item] = document.getElementById(item);
});
const boxtarget = {
    'length':1,
    'area':2,
    'volume':3,
    'mass':4
};

function converter(type){
    const input = components.inputs[`box${boxtarget[type]}input`];
    const from = components.frominputs[`box${boxtarget[type]}frominput`];
    const to = components.toinputs[`box${boxtarget[type]}toinput`];
    const result = components.results[type];

    function convert(){
        const value = input.value
        const fromUnit = from.value;
        const toUnit = to.value;

        const output = convertUnit(type, value, fromUnit, toUnit);

        result.innerHTML = output;
    }

    input.addEventListener("input", convert);
    from.addEventListener("change", convert);
    to.addEventListener("change", convert);
};

function convertUnit(type, value, from, to){
    const map = {
        length: {
            km: 1000,
            hm: 100,
            dam: 10,
            m: 1,
            dm: 0.1,
            cm: 0.01,
            mm: 0.001
        },

        area: {
            km2: 1e6,
            hm2: 1e4,
            dam2: 100,
            m2: 1,
            dm2: 0.01,
            cm2: 0.0001,
            mm2: 0.000001
        },

        volume: {
            km3: 1e9,
            hm3: 1e6,
            dam3: 1000,
            m3: 1,
            dm3: 0.001,
            cm3: 0.000001,
            mm3: 0.000000001
        },

        mass: {
            kg: 1000,
            hg: 100,
            dag: 10,
            g: 1,
            dg: 0.1,
            cg: 0.01,
            mg: 0.001
        }
    };

    const table = map[type];

    const base = value * table[from];
    const result = base / table[to];

    return result;
};

converter("length");
converter("area");
converter("volume");
converter("mass");

