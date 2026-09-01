# Installation et connexion

QoderWork est une application bureau qui s'exécute localement. Configuration requise : **macOS 14+** (paquets bi-architecture Apple Silicon / Intel), **Windows 10+ 64 bits**, 500 Mo d'espace disque, connexion stable (modèles, Skills et connecteurs sont rapatriés depuis le cloud).

> Documentation officielle d'installation : [macOS](https://docs.qoder.com/zh/qoderwork/installation-macos) ｜ [Windows](https://docs.qoder.com/zh/qoderwork/installation-windows)

## Canaux de téléchargement

- Version internationale : [qoderwork.com](https://qoderwork.com) (indiqué par la documentation officielle de démarrage)
- Version Chine : [qoder.com.cn/qoderwork](https://qoder.com.cn/qoderwork) (canal Alibaba Cloud, connexion avec un compte Qoder CN)

## Installation macOS

1. Téléchargez le .dmg et glissez-le dans Applications ;
2. Si Gatekeeper bloque le premier lancement : Réglages système → Confidentialité et sécurité → « Ouvrir quand même » en bas (ce message n'apparaît qu'une fois) ;
3. Connexion : connectez-vous avec un compte Qoder existant, ou inscrivez-vous par e-mail ou via un tiers ;
4. Vous entrez dans l'espace de travail.

Mises à jour : vérification en arrière-plan par défaut ; le téléchargement et le redémarrage n'ont lieu qu'après votre clic de confirmation — la version en cours n'est jamais remplacée sans accord ; vérification manuelle dans la barre de menus QoderWork → Rechercher des mises à jour.

Désinstallation : glissez vers la corbeille ; pour un nettoyage complet des configurations, après déconnexion, exécutez dans le terminal `rm -rf ~/.qoderwork` (cela efface l'historique local des tâches non synchronisé avec le cloud).

## Installation Windows : choisissez d'abord le bon paquet

Les deux programmes d'installation sont **strictement identiques en fonctionnalités** ; seuls l'emplacement et les permissions diffèrent :

| | Version système X64 (System) | Version utilisateur X64 (User) |
| --- | --- | --- |
| Emplacement | Program Files | %LOCALAPPDATA% |
| Utilisateurs | Tous les comptes | Compte courant uniquement |
| Droits administrateur | Requis | **Non requis** |

L'officiel le dit tel quel : « En cas de doute, choisissez la **version utilisateur** : pas besoin de droits administrateur, c'est l'installation la plus simple. »

Si SmartScreen bloque : « Plus d'informations » → « Exécuter quand même ». Désinstallation : Paramètres → Applications → Applications installées → cherchez Qoder → Désinstaller ; pour nettoyer les configurations, supprimez `%USERPROFILE%\.qoderwork`.

## Trois choses à faire après la connexion

1. **Passer en français** : réglage de langue en bas à gauche (l'anglais est possible par défaut) ;
2. **Vérifier les crédits** : bouton Credits en haut à droite pour le solde. Pack de crédits offert à l'inscription ; la version chinoise propose en plus un pointage quotidien (attention à la durée des promotions) ;
3. **Comprendre la facturation** : QoderWork facture en Credits, solde partagé avec toute la famille Qoder. Les modèles sont par paliers (standard/avancé/phare) à consommations différentes — le palier standard suffit pour les tâches courantes, voir [Mémoire, coûts et environnement sécurisé](/fr/qoderwork/adv-memory-cost).

## Problèmes d'installation courants

| Problème | Solution |
| --- | --- |
| macOS signale « développeur non vérifié » | Réglages système → Confidentialité et sécurité → Ouvrir quand même |
| Droits insuffisants sous Windows | Passez au paquet version utilisateur, ou exécutez en administrateur |
| macOS antérieur à 14 | Ne démarre pas ; mettez d'abord le système à niveau |
| Erreur de permissions pendant une tâche | Vérifiez que le dossier de travail concerné est bien autorisé |

## Confidentialité en trois points (version officielle)

1. Les opérations sur fichiers se font en local et ne sont pas téléversées dans le cloud ; en revanche, le texte concerné est envoyé au fournisseur d'API du grand modèle pour traitement ;
2. Seuls les dossiers de travail explicitement autorisés sont accessibles ; pour un dossier non autorisé mais indispensable, votre accord est demandé au préalable ;
3. Le contenu des fichiers n'est pas stocké durablement dans le cloud.

---

Étape suivante : [Première tâche →](/fr/qoderwork/03-first-task)
