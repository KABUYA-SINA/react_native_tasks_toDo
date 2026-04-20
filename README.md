# 📱 React Native Todo App (Redux + Navigation)

## 🚀 Description

Cette application est une **Todo List mobile développée avec React Native**, intégrant une gestion d’état avancée via **Redux Toolkit** et un système de persistance des données.

Elle permet de créer, afficher, modifier et supprimer des tâches, tout en naviguant entre plusieurs écrans grâce à React Navigation.

---

## 🎯 Objectif du projet

* Développer une application mobile fonctionnelle
* Gérer un state global avec Redux Toolkit
* Mettre en place la navigation mobile (Stack / Drawer)
* Persister les données localement
* Manipuler les composants React Native

---

## 🛠️ Technologies utilisées

* React Native
* Redux Toolkit
* Redux Persist
* React Navigation (Stack / Drawer)
* AsyncStorage
* Expo Vector Icons

---

## ⚙️ Fonctionnalités

* 📝 Ajout de tâches (nom + description)
* ❌ Suppression de tâches
* ✔️ Marquer une tâche comme complétée
* 🔁 Mise à jour du statut des tâches
* 💾 Sauvegarde automatique (persist store)
* 📱 Navigation entre écran Home et création de tâche

---

## 🧠 Architecture Redux

* `todoSlice` :

  * `addTodo` → ajouter une tâche
  * `removeTodo` → supprimer une tâche
  * `updateStatus` → changer l’état (done / not done)

* Store configuré avec :

  * Redux Persist (AsyncStorage)
  * CombineReducers

---

## 📂 Structure globale

* `Navigation / Drawer`
* `Screens`

  * Home (liste des tâches)
  * Create Todo
* `Components`

  * Form
  * ToDoCards
  * Buttons
* `Redux`

  * store
  * slice todo

---

## 📌 Fonctionnement

1. L’utilisateur ajoute une tâche via un formulaire
2. La tâche est stockée dans Redux
3. Elle est persistée localement
4. L’utilisateur peut :

   * la cocher (completed)
   * la supprimer
5. Navigation fluide entre les écrans

---

## 💡 Compétences développées

* Développement mobile avec React Native
* Gestion d’état global avec Redux Toolkit
* Navigation mobile avancée
* Persistance de données
* Architecture d’application scalable

---

## 👨‍💻 Auteur

**Sina Kabuya**
GitHub : https://github.com/KABUYA-SINA
Portfolio : https://kabuya-sina.github.io/Portfolio-SK/

---
