/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let a = {
    "1.12.2": {
        "forge": "https://cdn.modrinth.com/data/ZukQzaRP/versions/FG1.2.1-1.12.2/RPMTW-Update-Mod-1.12-1.2.1.jar"
    },
    "1.16.x": {
        "fabric": "https://cdn.modrinth.com/data/ZukQzaRP/versions/FC1.2.0-1.16/RPMTW-Update-Mod-Fabric-1.16-1.2.0.jar",
        "forge": "https://cdn.modrinth.com/data/ZukQzaRP/versions/FG1.2.0/RPMTW-Update-Mod-Forge-1.16-1.2.0.jar"
    },
    "1.17.x": {
        "fabric": "https://cdn.modrinth.com/data/ZukQzaRP/versions/FC1.2.2+1.17.x/RPMTW-Update-Mod-Fabric-1.17-1.2.2.jar",
        "forge": "https://cdn.modrinth.com/data/ZukQzaRP/versions/FG1.2.2+1.17.x/RPMTW-Update-Mod-Forge-1.17-1.2.2.jar"
    }
}
for (let i in a) a[i].s = !1;

console.log(a);
