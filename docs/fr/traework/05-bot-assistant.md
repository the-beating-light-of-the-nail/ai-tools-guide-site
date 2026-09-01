# Assistant de bureau : donnez des tâches directement depuis Feishu et WeChat

L'assistant de bureau (Bot Assistant) vous permet de **traiter le travail directement dans vos outils de chat habituels** : soumettre des tâches, suivre l'avancement et recevoir les résultats, en conversation individuelle ou en groupe. Avant, on déplaçait les documents de travail vers l'IA ; désormais l'IA entre directement dans votre espace de travail.

> Documentation officielle : [docs.trae.cn/work_bot-assistant](https://docs.trae.cn/work_bot-assistant)

## Lier Feishu

1. Dans la barre de navigation de gauche, cliquez sur « Assistant de bureau » ;
2. Dans le panneau d'administration, cliquez sur « Lier » à droite de Feishu ; un QR code s'affiche ;
3. Scannez-le avec Feishu sur votre téléphone pour ouvrir « Créer une application agent Feishu », puis touchez « Créer maintenant » ;
4. Suivez les instructions pour créer l'application (avatar et nom personnalisables, nom par défaut TraeWork) ; une fois créée, elle est automatiquement approuvée et publiée ;
5. Touchez « Ouvrir l'application » : elle apparaît dans la liste de messages Feishu et se retrouve aussi dans le centre « Applications » de Feishu.

## Lier WeChat

1. Affichez de même le QR code dans le panneau d'administration de « l'Assistant de bureau » ;
2. Scannez-le avec WeChat sur votre téléphone pour ouvrir « Connecter OpenClaw à WeChat » ;
3. Touchez « Connecter » : le plugin « WeChat ClawBot » s'active automatiquement et rejoint la liste des chats (visible dans le centre « Fonctions » de WeChat).

WeChat Work et DingTalk sont annoncés « bientôt disponibles » par l'officiel.

## Comment l'utiliser

- **Conversation individuelle** : envoyez directement un message à l'application, par exemple « dis-moi l'essentiel de ce document » ;
- **Groupe** : `@TraeWork` + votre message, pour la faire travailler dans le groupe ;
- Après réception du résultat, vous pouvez continuer à poser des questions jusqu'à être satisfait.

Quatre scénarios fréquents (prompts à copier tels quels) :

```text
[Résumé de document] Dis-moi l'essentiel de ce document.

[Rapport hebdomadaire] Améliore mon bilan de la semaine en suivant la structure : conclusion de la semaine,
avancées clés, programme de la semaine prochaine ;
la conclusion résume en une phrase le résultat le plus digne d'être signalé ; les avancées clés en 3 à 5 points,
précisant ce qui a été fait et les résultats obtenus ; le programme de la semaine prochaine en 2 à 3 points,
clairs sur les chantiers à avancer et le soutien nécessaire.

[E-mail] Rédige un e-mail au responsable Zhao de notre fournisseur : demander l'état de l'expédition du dernier lot
d'équipements de bureau ; la livraison était prévue le 10 août mais il n'y a aucune information de logistique ;
prier de répondre avant la fin de journée avec un délai estimé.
Ton poli et précis, sans paraître autoritaire.

[Écrire dans Feishu] Reporte le rapport hebdomadaire ci-dessus dans un document Feishu et envoie-le dans le groupe de reporting.
```

> Les scénarios sont adaptés d'un test réel de l'assistant TraeWork ([K Jie Yanjiushe](https://zhuanlan.zhihu.com/p/2071317142574724109)) ; le rapport hebdomadaire a été généré en environ une minute.

## Limites à connaître absolument

1. **Disponible uniquement sur la version bureau**, et la première connexion doit être initiée depuis la version bureau (le mobile fonctionne ensuite) ;
2. **Dans un groupe, seul le créateur peut utiliser l'assistant de bureau** ; les autres membres ne font que consulter l'historique ;
3. Les messages envoyés dans le panneau de dialogue de la version bureau **ne sont pas synchronisés** vers les outils de messagerie ;
4. Les conversations de plusieurs outils de messagerie **ne fusionnent pas automatiquement leur contexte** — pour une même tâche, restez dans la conversation d'origine (l'icône à droite du nom d'utilisateur identifie la source du message) ;
5. Par défaut, pas de manipulation directe de Feishu Docs / Calendar / Base ; il faut d'abord passer par l'[autorisation d'applications externes](/fr/traework/06-plugins-integrations) ;
6. La mise en veille de l'ordinateur peut interrompre l'envoi et la réception des messages.

## Deux réglages de sécurité

Dans le panneau « Gérer les connexions > Connexions de canaux », deux commutateurs méritent attention :

- **Garder l'ordinateur en éveil** : une fois activé, l'ordinateur reste éveil de la réception du message à la génération de la réponse — recommandé ;
- **Accès complet** : ⚠️ ce mode **désactive la protection du bac à sable et tous les contrôles d'approbation** ; TraeWork peut alors exécuter n'importe quelle opération directement sur la machine hôte. N'activez ce mode que si vous en mesurez pleinement les conséquences.

---

Étape suivante : [Plugins et autorisation d'applications externes →](/fr/traework/06-plugins-integrations)
