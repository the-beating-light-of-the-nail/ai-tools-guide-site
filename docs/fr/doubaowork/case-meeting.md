# Une réunion, de la préparation au suivi des actions

> Contexte : la réunion est finie, mais rien ne suit forcément. Avec l'IA, transformer « c'est noté » en « quelqu'un est en charge, il y a une échéance, c'est vérifiable ».

La réunion est finie, mais rien ne suit forcément : on a beaucoup discuté, il reste dans le groupe de vagues « on regarde ça plus tard », et à la sortie, quand on demande qui est responsable et pour quand, il faut encore relire les notes. Quelles phrases sont devenues des décisions, lesquelles restent des idées, quelles tâches doivent être confiées immédiatement à quelqu'un ? Tant que ces catégories ne sont pas clarifiées, le compte rendu reste au stade de « c'est noté ».

Une réunion se découpe en trois temps : **avant**, mettre tous les participants au même niveau d'information ; **pendant**, conserver l'enregistrement brut ; **après**, confier décisions et actions à des personnes précises. Le compte rendu n'est qu'une étape intermédiaire, qui doit aussi relier les tâches de la semaine passée à la prochaine vérification.

Dans tout ce flux, le modèle est bon pour **structurer, comparer et extraire** ; responsables, échéances, motifs de report et décisions finales restent soumis aux documents d'origine. Quand un point n'est pas explicite dans le matériau, garder « à confirmer » est plus sûr qu'inventer une réponse complète.

## Transformer la transcription brute en compte rendu normalisé

Une transcription contient tics de langage, redites et digressions ; une compression directe écraserait aussi les conclusions. Commencez par identifier les points à l'ordre du jour, puis extrayez séparément les éléments d'appui, les décisions explicites, les actions et les points encore en désaccord :

```text
Lis la transcription « Compte-rendu-verbal-reunion-produit.docx » en pièce jointe et transforme-la
en compte rendu formel de réunion. Supprime les tics de langage, les répétitions et les passages
sans rapport avec la réunion, sans modifier le sens des interventions.
Le compte rendu doit contenir : sujet de la réunion, date, participants, contexte, discussion des
points à l'ordre du jour, conclusions claires, décisions confirmées, actions et points à confirmer.
Ne remplis un responsable ou une échéance que si le texte original le mentionne explicitement.
Marque « à confirmer » tout ce que l'original ne précise pas, sans conjecturer.
```

À l'exécution, le système supprime tics et redites, puis structure selon contexte, ordre du jour, conclusions, décisions, actions et points à confirmer. Si vous partez d'un **audio brut**, il peut d'abord le transcrire puis appliquer la même structure — ce qui évite la retranscription manuelle, mais le résultat doit toujours être revu dans le contexte de la réunion.

> Attention : noms propres, noms de produits, chiffres et tournures négatives influencent facilement les conclusions. Avant diffusion officielle, réécoutez les passages concernés pour vérifier que le système n'a pas transformé une « opinion discutée » en « décision finale ».

## Suivre les tâches de la réunion précédente

Un compte rendu isolé dit « ce qui s'est passé cette fois » ; il faut rapprocher deux semaines de documents pour savoir « si les choses avancent ». Pointez chaque action de la semaine passée en gardant son intitulé, puis cherchez dans la transcription de la semaine **la preuve d'achèvement, le motif de report ou la décision d'annulation** — une tâche non mentionnée n'est pas automatiquement terminée :

```text
Lis ensemble « Compte-rendu-semaine-derniere.docx » et « Transcription-semaine-courante.docx ».
Pointe une à une les actions de la réunion de la semaine passée et détermine leur statut d'après
le contenu de la semaine : terminée, en cours, reportée, annulée ou non mentionnée.
Pour les tâches reportées, extrais le motif, la nouvelle échéance et le responsable ;
liste séparément les tâches nouvelles de la semaine.
Produis enfin deux sections : « tableau de suivi des tâches de la semaine passée » et
« nouvelles actions de la semaine ».
```

Le système confronte chaque action passée au contenu de la semaine, puis liste séparément les nouvelles tâches — les deux groupes restent distincts, l'ancien ne se mélange pas au nouveau. À la validation, vérifiez : chaque ancienne tâche a-t-elle un statut ; les tâches reportées ont-elles motif, nouvelle échéance et responsable ; les nouvelles actions proviennent-elles bien de la réunion de la semaine.

---

Scénario similaire : [Un document Word, de la relecture à la mise en page livrée →](/fr/doubaowork/case-word)
