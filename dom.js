function ajouterTache() {
    const input = document.getElementById('tacheInput');
    const nomTache = input.value.trim();

    if (nomTache === '') {
        alert('Veuillez entrer une tâche valide.');
        return;
    }

    const listeTaches = document.getElementById('listeTaches');

    // Créer un élément de liste pour la nouvelle tâche
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center bg-danger'; // Tâche par défaut en "To Do" (rouge)

    // Créer un élément pour le texte de la tâche
    const span = document.createElement('span');
    span.textContent = nomTache;

    // Créer les boutons d'action
    const div = document.createElement('div');

    // Bouton "To Do" (rouge)
    const btnTodo = document.createElement('button');
    btnTodo.className = 'btn btn-outline-danger btn-sm me-2';
    btnTodo.textContent = 'To Do';
    btnTodo.onclick = function () {
        li.className = 'list-group-item d-flex justify-content-between align-items-center bg-danger';
    };

    // Bouton "Doing" (orange)
    const btnDoing = document.createElement('button');
    btnDoing.className = 'btn btn-outline-warning btn-sm me-2';
    btnDoing.textContent = 'Doing';
    btnDoing.onclick = function () {
        li.className = 'list-group-item d-flex justify-content-between align-items-center bg-warning';
    };

    // Bouton "Done" (vert)
    const btnDone = document.createElement('button');
    btnDone.className = 'btn btn-outline-success btn-sm me-2';
    btnDone.textContent = 'Done';
    btnDone.onclick = function () {
        li.className = 'list-group-item d-flex justify-content-between align-items-center bg-success';
    };

    // Bouton "Modifier"
    const btnEdit = document.createElement('button');
    btnEdit.className = 'btn btn-warning btn-sm me-2';
    btnEdit.textContent = 'Modifier';
    btnEdit.onclick = function () {
        const nouveauNom = prompt('Modifier la tâche:', nomTache);
        if (nouveauNom && nouveauNom.trim() !== '') {
            span.textContent = nouveauNom;
        }
    };

    // Bouton "Supprimer"
    const btnDelete = document.createElement('button');
    btnDelete.className = 'btn btn-danger btn-sm';
    btnDelete.textContent = 'Supprimer';
    btnDelete.onclick = function () {
        listeTaches.removeChild(li);
    };

    // Ajouter les boutons à la div
    div.appendChild(btnTodo);
    div.appendChild(btnDoing);
    div.appendChild(btnDone);
    div.appendChild(btnEdit);
    div.appendChild(btnDelete);

    // Ajouter le texte de la tâche et les boutons à l'élément de liste
    li.appendChild(span);
    li.appendChild(div);

    // Ajouter l'élément de tâche à la liste
    listeTaches.appendChild(li);

    // Réinitialiser le champ de texte
    input.value = '';
}
