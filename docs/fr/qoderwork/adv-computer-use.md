# Approfondissement : contrôle de l'ordinateur, saisie vocale et instantanés d'applications

Au-delà de l'automatisation du navigateur, QoderWork peut piloter directement l'interface de votre ordinateur, vous écouter et capturer l'application en cours — c'est la forme complète de son personnage d'« agent IA dédié ».

> Documentation officielle : [computer-use](https://docs.qoder.com/zh/qoderwork/computer-use) ｜ [voice-input](https://docs.qoder.com/zh/qoderwork/voice-input)

## Contrôle de l'ordinateur (Computer Use)

Confiez à QoderWork les tâches qui doivent se faire dans une interface graphique. Quatre capacités clés :

- **Perception de l'écran** : captures continues pendant l'opération ; l'étape suivante n'est décidée qu'après confirmation de la réussite de la précédente ;
- **Contrôle souris-clavier** : clic, double-clic, glisser-déposer, saisie, raccourcis, avec une précision au pixel ;
- **Exécution autonome en arrière-plan** : ne vole pas le focus au premier plan ; vous continuez à travailler ;
- **Flux multi-applications** : ajustement dynamique selon le retour en temps réel, pas un script figé rejoué.

**Activation** : Extensions → Connecteurs → carte « Contrôle de l'ordinateur » → activer → fenêtre de confirmation → première autorisation de deux permissions système : **Accessibilité** (lecture de l'arborescence UI) et **Enregistrement de l'écran**. macOS 14+, Windows depuis v0.5.7.

**Transparence d'exécution** : chaque action suit quatre phases « capture → description de l'opération → opération réelle → confirmation du résultat (nouvelle capture de vérification) », visibles en continu dans la surveillance de tâche.

**Trois stratégies d'exécution** (important) :

| Stratégie | Comportement | Adapté à |
| --- | --- | --- |
| Demander à chaque fois (défaut) | Confirmation avant chaque manipulation | Opérations irréversibles (envoi d'e-mail, commande) |
| Exécution automatique | Enchaîne sans demander | Flux répétitifs bien connus |
| Désactivé | Manipulation coupée | Quand vous ne voulez que les autres capacités |

Exemple réel (Xu Jingfeng, ingénieur Alibaba) :

```text
Je pars de Hangzhou pour un voyage à Sanya : cherche et compare les billets d'avion sur Fliggy et Ctrip,
puis établis un guide de voyage,
génère un PDF et ajoute le programme au Calendrier du Mac.
```

Livrables : un PDF guide de Sanya + un événement d'agenda avec horaires détaillés.

**Limites et précautions** :

- CAPTCHA, codes SMS et reconnaissance faciale sont hors de portée : intervention manuelle nécessaire ;
- Plus lent qu'une pure conversation (capture et analyse à chaque étape) ; précision en baisse sur les interfaces complexes ;
- Donner l'accès, c'est donner le contrôle — l'IA peut piloter d'autres applications « en votre nom » ;
- Fermez les fenêtres contenant des mots de passe avant lancement ; ne disputez pas la main aux applications pilotées ;
- Recommandation officielle : **pour les tâches web, privilégier l'automatisation du navigateur, plus rapide et plus précise que le contrôle de l'ordinateur**.

## Saisie vocale : maintenez Fn et parlez

Par défaut, **maintenir la touche Fn enregistre**, sans icône à cliquer (entrée de secours : icône micro à droite de la zone de saisie). Cinq étapes : maintenir → énoncer le besoin (pas de limite stricte de durée) → transcription automatique dans la zone de saisie → modifier au besoin → envoyer.

- S'appuie sur le moteur de reconnaissance vocale du système ; les langues dépendent des paquets installés ; permission micro requise ;
- Stratégie d'usage : « **ébauche à la voix, correction au clavier** » ;
- v0.6.2 : transcription en temps réel ; v0.6.6 : envoi automatique par raccourci vocal ; v0.7.1 : isolation de l'empreinte vocale (en environnement bruyant, seule votre voix est conservée) ;
- Combinaisons : voix + pièce jointe (joindre un PDF puis dire « résume les points clés en liste de tâches ») ; ajouts oraux après livraison (« le titre encore un peu plus grand »).

## Instantané d'application (bêta)

De « je vois un problème » à « je pose la question », une seule étape : appuyez simultanément sur les deux touches Option (raccourci global personnalisable) pour capturer **une capture et le texte lisible de l'application au premier plan** comme contexte de conversation — une erreur à l'écran à soumettre à l'IA ? Un raccourci suffit. Nécessite les permissions macOS Accessibilité + Enregistrement de l'écran (une seule fois).

## Aide-mémoire des raccourcis (macOS / Windows)

| Fonction | macOS | Windows |
| --- | --- | --- |
| Ouvrir les paramètres | ⌘, | Ctrl+, |
| Créer une tâche | ⌘N | Ctrl+N |
| Rechercher dans toutes les tâches | ⌘G | Ctrl+G |
| Rechercher dans la tâche en cours | ⌘F | Ctrl+F |
| Envoyer le message | ↵ ou ⌘↵ | Enter |
| Insérer un saut de ligne | ⇧↵ | Shift+Enter |
| Bascule rapide de tâche | ⌃Tab | Ctrl+Tab |

S'y ajoute **QuickPick** : fenêtre globale de tâche rapide (déclenchée par ex. par ⌥Space ou double frappe de touche modificatrice) pour soumettre une tâche sans quitter la fenêtre principale.
