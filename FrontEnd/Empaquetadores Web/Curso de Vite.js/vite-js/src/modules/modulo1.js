const module = {
    name: "module 1",
}

export function load() {
    console.log(`${module.name} cargado!`);
}

export default module;