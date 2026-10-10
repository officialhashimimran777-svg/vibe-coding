// Profile Card Component

function createProfileCard(name, role) {
    return {
        name: name,
        role: role,
        display: `${name} - ${role}`
    };
}

const profile = createProfileCard("Hashim", "Developer");

console.log(profile);