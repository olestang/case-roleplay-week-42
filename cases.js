const CASES = [
  {
    id: "left-out",
    title: "I Don’t Want to Play With You",
    setting: "A disagreement around a cardboard spaceship",
    preview: "A popular pretend game has ended with a damaged spaceship and two very different explanations of why it happened.",
    icon: "🚀",
    groupSizes: [3, 4],
    roleOrder3: ["nora", "elias", "sara"],
    roleOrder4: ["nora", "elias", "sara", "amalie"],
    roles: {
      nora: {
        name: "Nora · child",
        starter: false,
        levels: {
          supported: [
            "For the last week, a big cardboard box has been a spaceship. At first, you played with everyone and loved talking to the aliens. Then Elias started deciding more and more of the game. Yesterday he told you that you could only be the ‘space baby’. Today he said there was no room for you at all.",
            "You tried several times to join. The others kept closing the cardboard door. Elias finally told you to find another game. You became very angry and pulled one of the cardboard wings. You meant to pull it, but you did not expect the whole side to tear.",
            "Now everyone is talking about the broken spaceship. You know you should not have pulled it, but you think nobody is asking why you became so angry. To you, being left out is the biggest part of the story."
          ],
          standard: [
            "For the last week, the biggest cardboard box in the kindergarten has been a spaceship. At first, you played with everyone else and especially enjoyed being the person who talked to the aliens. Over the last few days, however, Elias has started deciding most of the rules. Yesterday he told you that you could only be the ‘space baby’, and today he said there was no room for you in the spaceship at all.",
            "You tried to join several times, but the others kept closing the cardboard door. When Elias finally told you to go and find another game, you lost your temper. You grabbed one of the cardboard wings and pulled hard. You knew you were pulling it, but you did not expect the whole side of the spaceship to rip open.",
            "You know damaging the spaceship was wrong. Still, you feel that everyone is focusing only on what you did after you became angry. From your point of view, the more important question is why you kept being pushed out of a game you had been part of before."
          ],
          challenge: [
            "For the past week, the kindergarten’s largest cardboard box has been transformed into a spaceship. You were originally part of the game and particularly enjoyed inventing conversations with imaginary aliens. Gradually, though, Elias began controlling more of the rules. Yesterday he assigned you the role of ‘space baby’ even though you objected, and today he announced that there was no room for you in the spaceship at all.",
            "You made several attempts to join in, but the cardboard door was repeatedly shut in front of you. When Elias eventually told you to find another game, your frustration took over. You deliberately grabbed one of the cardboard wings and pulled it, although you genuinely did not expect the entire side of the construction to tear away.",
            "You accept that damaging something the group had built was wrong, but you resent the way the incident is now being reduced to ‘Nora broke the spaceship’. In your view, the damage happened at the end of a longer pattern of exclusion, and you want the others to recognise that before they decide you are simply the person who ruined everything."
          ]
        }
      },
      elias: {
        name: "Elias · child",
        starter: false,
        levels: {
          supported: [
            "The spaceship was your idea. You found the big cardboard box and helped add windows, buttons and wings. You are very proud of it.",
            "Nora used to play with you, but you think she often changes the game. Yesterday everyone was meant to be astronauts, but Nora suddenly became an alien queen and said the spaceship was hers. Today you wanted to play the game properly. You told Nora there was no room for another astronaut and later told her to find another game. You do not think that means you dislike her.",
            "Then Nora pulled the spaceship and broke one side. You think she did it because she was angry. Now the adults are talking about exclusion, and you feel they are forgetting how much work you and the others put into the spaceship."
          ],
          standard: [
            "The spaceship was originally your idea. You found the large cardboard box after a delivery and helped turn it into something special by adding windows, buttons and wings. You have spent several days working on it and feel proud of what the group created.",
            "Nora used to play with you, but lately you have found her difficult to play with because she often changes the rules. Yesterday everyone was supposed to be astronauts, but Nora suddenly declared that she was an alien queen and that the spaceship belonged to her. Today you wanted the game to make sense, so you told her there was no room for another astronaut. Later, when she kept trying to enter, you told her to find another game. You do not see that as the same thing as saying you do not like her.",
            "A little later, Nora grabbed one of the wings and the side of the spaceship ripped open. You are convinced she pulled it because she was angry. Now the adults seem very interested in whether Nora was excluded, and you feel that they are paying much less attention to the fact that she damaged something you had worked hard to build."
          ],
          challenge: [
            "The cardboard spaceship began as your idea. After spotting a large delivery box, you persuaded several children to help transform it with windows, control panels and wings. You have invested a lot of time in the project and feel a strong sense of ownership over the game, even though other children helped build it too.",
            "Nora was involved from the beginning, but in recent days you have found playing with her frustrating because she frequently changes the rules halfway through. Yesterday, when everyone had agreed to be astronauts, she suddenly announced that she was an alien queen and claimed the spaceship for herself. Today you wanted the game to remain consistent, so you said there was no room for another astronaut. When she kept trying to join, you eventually told her to find another game. In your mind, that was about protecting the game, not rejecting Nora as a person.",
            "Soon afterwards, Nora grabbed one of the cardboard wings and the side tore apart. You believe the damage was a deliberate reaction to being angry. The adults are now discussing exclusion and fairness, and you feel irritated that the conversation may turn you into the ‘bossy’ child while overlooking the effort that went into the spaceship and the fact that Nora was the one who physically damaged it."
          ]
        }
      },
      sara: {
        name: "Sara · kindergarten worker",
        starter: true,
        starterCue: "Begin by explaining that you have brought everyone together because the spaceship is damaged and you want to hear what happened before deciding what to do next.",
        levels: {
          supported: [
            "The cardboard spaceship has been very popular this week. You liked seeing the children use their imagination, but you also noticed that Elias has started deciding many of the rules.",
            "Today you were helping another child when you heard shouting. When you came over, one side of the spaceship was broken. Nora was crying and Elias was very angry. Elias said Nora broke it because she was angry. Nora said nobody would let her play.",
            "This is not the first small problem around the spaceship. Yesterday you heard someone tell Nora she had to be the ‘space baby’, and she did not look happy. You also know Nora can react strongly when games do not go her way. You have brought the children together because you want to understand the whole situation."
          ],
          standard: [
            "The cardboard spaceship has been one of the most popular activities in the kindergarten this week. You have enjoyed seeing the children cooperate and use their imagination, although you have also noticed that Elias has gradually become the person who decides many of the rules.",
            "Today you were helping another child when you suddenly heard shouting. By the time you reached the play area, one side of the spaceship was torn open. Nora was crying and Elias was furious. Elias immediately said Nora had destroyed it because she was angry, while Nora said the others had repeatedly refused to let her join.",
            "You have seen smaller disagreements around the spaceship before. Yesterday you heard someone tell Nora that she had to be the ‘space baby’, and she clearly did not like it. At the same time, you know that Nora sometimes reacts very strongly when a game does not develop the way she wants. You have gathered everyone because you want to hear the different versions before deciding how to deal with both the damage and the conflict."
          ],
          challenge: [
            "The cardboard spaceship has become one of the week’s most successful imaginative-play activities. You have been pleased by the children’s creativity and cooperation, although you have also observed that Elias has gradually taken on the role of rule-maker and organiser within the game.",
            "Today, while you were helping another child, you heard raised voices from the play area. When you arrived, one side of the spaceship had been torn open. Nora was in tears and Elias was visibly furious. He immediately claimed that Nora had destroyed it out of anger; Nora insisted that the damage only happened after the group repeatedly prevented her from joining.",
            "The conflict does not seem completely new. Yesterday you overheard someone assigning Nora the role of ‘space baby’ despite her obvious discomfort. On the other hand, you are also aware that Nora can respond intensely when she feels a game is not going her way. Rather than deciding immediately who is to blame, you have brought the children together to reconstruct what happened and address both the damaged construction and the way the group has been playing together."
          ]
        }
      },
      amalie: {
        name: "Amalie · child",
        starter: false,
        levels: {
          supported: [
            "You have played in the spaceship almost every day. You like both Nora and Elias, so this argument makes you uncomfortable.",
            "You think Elias can be too bossy. Earlier today you heard him tell Nora, ‘You always ruin the game.’ You thought it was mean, but you said nothing because you wanted to keep playing. You also saw Nora kick the bottom of the box. Later, you saw her pull the wing, but you are not sure she meant to break it.",
            "Yesterday, after Elias went home, Nora told you that she wanted to make her own spaceship and not let anyone else in. You think both children have tried to control the game. You are nervous about saying that because they are both your friends."
          ],
          standard: [
            "You have been part of the spaceship game almost every day and you are friends with both Nora and Elias. That makes the argument uncomfortable because you do not want either of them to think you are taking sides.",
            "You do think Elias sometimes becomes too bossy. Earlier today you heard him tell Nora, ‘You always ruin the game.’ You thought that was unkind, but you stayed quiet because you wanted the game to continue. At the same time, you saw Nora kick the bottom of the box after she was refused entry. Later you watched her grab the wing and pull it, although you cannot tell whether she actually intended to tear the whole side.",
            "There is another part nobody has mentioned. Yesterday, after Elias had gone home, Nora told you she would make her own spaceship and refuse to let anyone else inside. From your perspective, both Nora and Elias have been trying to control who gets to decide the game. You know this information might upset both of them, so you are hesitant to share it."
          ],
          challenge: [
            "You have participated in the spaceship game almost every day and consider both Nora and Elias your friends, which leaves you in an awkward position now that they are blaming each other. You would prefer not to be treated as a witness for either side.",
            "In your view, Elias can become controlling when he is excited about a game. Earlier today you heard him tell Nora, ‘You always ruin the game.’ You considered the comment unfair, but chose not to intervene because you wanted to keep playing. At the same time, you also saw Nora kick the bottom of the cardboard box after being refused entry. Later, you watched her grab the wing and pull it, although you cannot honestly say whether she intended the entire side to tear.",
            "You also remember a conversation from yesterday that complicates the story further. After Elias had gone home, Nora told you that she planned to build her own spaceship and refuse entry to everyone else. To you, the conflict is not simply one child excluding another; both Nora and Elias seem to be struggling over control of the game. You are reluctant to say this openly because you know both friends may feel betrayed."
          ]
        }
      }
    }
  },

  {
    id: "missing-teddy",
    title: "The Missing Teddy Bear",
    setting: "A favourite teddy has disappeared during the day",
    preview: "A much-loved teddy is missing, one child is being accused, and the adults may know less than they first think.",
    icon: "🧸",
    groupSizes: [3, 4],
    roleOrder3: ["mia", "oliver", "henrik"],
    roleOrder4: ["mia", "oliver", "henrik", "parent"],
    roles: {
      mia: {
        name: "Mia · child",
        starter: false,
        levels: {
          supported: [
            "You bring your teddy bear, Bruno, to kindergarten almost every day. Bruno is old, one ear is loose, and your aunt gave him to you when you were a baby. Today you brought him into the playroom because you were playing hospital.",
            "After lunch, Bruno was gone. You immediately thought Oliver had taken him. Earlier, Oliver wanted Bruno for his animal hospital, but you said no. Later you saw Oliver carrying something brown under his jumper. He says it was not Bruno, but you do not believe him.",
            "You are very upset because you always sleep with Bruno. You have said you do not want to go home without him. You are sure Oliver knows more than he is saying."
          ],
          standard: [
            "You bring your teddy bear, Bruno, to kindergarten almost every day. He is old, one ear is slightly loose, and your aunt gave him to you when you were a baby. You normally leave him safely in your cubby, but today you brought him into the playroom because you and some other children were playing hospital.",
            "After lunch, Bruno was missing. You immediately suspected Oliver. Earlier in the day he wanted to use Bruno as a patient in his animal hospital, but you said no because Oliver sometimes throws toys around during games. Later you saw Oliver carrying something brown underneath his jumper. He insists it was not Bruno, but you do not believe him.",
            "You are becoming more upset because you sleep with Bruno every night and cannot imagine going home without him. You have told Henrik that you are not leaving until Bruno is found. In your mind, Oliver is the obvious person to question because you are convinced he knows something he has not admitted."
          ],
          challenge: [
            "Your teddy bear Bruno comes to kindergarten with you almost every day. He is worn, one ear is slightly loose, and he has enormous sentimental value because your aunt gave him to you when you were a baby. Normally he stays in your cubby, but today you brought him into the playroom to be part of a hospital game.",
            "When you looked for Bruno after lunch, he had disappeared. Your suspicion immediately focused on Oliver. Earlier, he had asked to use Bruno as a patient in his animal hospital, but you refused because Oliver can be careless with toys when he becomes excited. Later you noticed him carrying something brown underneath his jumper. Although he insists it was only his hat, you remain unconvinced.",
            "You are increasingly distressed because Bruno is part of your bedtime routine and you cannot imagine leaving without him. You have told Henrik that you will not go home until the teddy is found. From your perspective, Oliver had both a reason to take Bruno and an opportunity, so you believe the adults should stop treating the situation like a simple case of a misplaced toy."
          ]
        }
      },
      oliver: {
        name: "Oliver · child",
        starter: false,
        levels: {
          supported: [
            "You did want to play with Bruno this morning. Mia said no, and that annoyed you because yesterday she played with your dinosaur.",
            "Later you found Bruno alone on a chair. You picked him up, carried him to the reading corner and put a small blanket over him. You told two children that Bruno needed to sleep after his operation. Then you went outside.",
            "You did not steal Bruno. The brown thing under your jumper was your knitted hat. You are angry that Mia calls you a thief. But you have not told the adults that you moved Bruno because you are afraid they will blame you for everything."
          ],
          standard: [
            "You did ask to use Bruno in your animal hospital this morning. Mia refused, which annoyed you because she had been allowed to play with your dinosaur the day before.",
            "Later, you noticed Bruno sitting alone on a chair. You picked him up and carried him to the reading corner, where you put a small blanket over him. You even told two other children that Bruno needed to sleep after his operation. After that, you went outside and did not think about the teddy again.",
            "You did not steal Bruno, and the brown thing Mia saw under your jumper was your knitted hat. You are angry that she keeps calling you a thief. However, you have not yet admitted to the adults that you moved Bruno without Mia’s permission because you are worried they will decide that the missing teddy must therefore be your fault."
          ],
          challenge: [
            "You did want Bruno to be part of your animal-hospital game this morning. Mia refused, which you considered unfair because she had been allowed to use your dinosaur the previous day.",
            "Some time later, you found Bruno sitting unattended on a chair. Without asking Mia, you carried him to the reading corner, tucked him under a small blanket and told two children that he needed to rest after an operation. You then went outside and assumed the teddy would stay there until Mia collected him.",
            "You are certain you did not steal Bruno. The brown object Mia later noticed beneath your jumper was simply your knitted hat. Being repeatedly described as a thief makes you angry and defensive. At the same time, you have avoided telling the adults that you moved Bruno at all, because you fear that once you admit that detail, everyone will stop listening to the rest of your explanation and automatically blame you for the disappearance."
          ]
        }
      },
      henrik: {
        name: "Henrik · kindergarten worker",
        starter: true,
        starterCue: "Start by calmly saying that Bruno is still missing and that you want everyone to explain what they remember, without accusing anyone before you know the whole story.",
        levels: {
          supported: [
            "When Mia told you Bruno was missing, you first thought he had been left somewhere in the playroom. Mia has lost him before, and he normally appears quickly.",
            "You searched the cubbies, playroom and sleeping area. Then Mia accused Oliver. Oliver became defensive and said he had never touched Bruno.",
            "Something about that does not fit your memory. Before outdoor time, you were cleaning the reading corner and remember seeing a stuffed animal under a blanket. You picked up the blanket and carried several things toward the storage area, but you cannot remember exactly what happened to the teddy. You are starting to wonder whether you moved Bruno yourself."
          ],
          standard: [
            "When Mia first reported that Bruno was missing, you assumed the teddy had simply been left somewhere in the playroom. Mia has misplaced him before, and he usually turns up quickly.",
            "You helped search the cubbies, playroom and sleeping area without finding him. Mia then accused Oliver of taking the teddy. Oliver became defensive and insisted that he had never touched Bruno.",
            "That statement does not completely fit with your own memory of the day. Before outdoor time, while cleaning the reading corner, you remember seeing a stuffed animal underneath one of the blankets. You picked up the blanket and carried several items toward the storage area, but you cannot clearly remember what you did with the toy. You do not want children accusing each other without evidence, especially because you are now wondering whether you accidentally moved Bruno yourself."
          ],
          challenge: [
            "When Mia first told you Bruno was missing, you assumed the problem would be solved by a quick search. She has misplaced the teddy before, and on previous occasions he has reappeared in an unexpected but harmless place.",
            "You searched the cubbies, playroom and sleeping area without success. The situation became more serious when Mia openly accused Oliver, who immediately became defensive and claimed he had never touched Bruno at all.",
            "Oliver’s certainty sits awkwardly beside a vague memory of your own. Shortly before outdoor time, you were tidying the reading corner and recall seeing a stuffed animal partly covered by a blanket. You gathered the blanket together with several other items and carried them towards the storage area, yet you cannot reconstruct exactly what happened next. You want to prevent an unsupported accusation between children, and you are increasingly aware that your own tidying may have contributed to the disappearance."
          ]
        }
      },
      parent: {
        name: "Mia’s parent",
        starter: false,
        levels: {
          supported: [
            "Bruno has been in your family for years. He is not expensive, but Mia has slept with him almost every night since she was very small. You have suggested leaving him at home, but Mia likes bringing him to kindergarten.",
            "You are worried that Bruno is missing, but you are not completely surprised. Mia often loses small things. Last month she said Bruno had been ‘stolen’, but he was later found inside her own backpack.",
            "What worries you most is that Mia is very sure Oliver took him. You do not know if that is true, and you do not want her accusing another child without proof. You want Bruno found, but you also want to understand why Mia is so certain."
          ],
          standard: [
            "Bruno has been part of your family for years. He is not valuable in money, but Mia has slept with him almost every night since she was very young. You have suggested several times that he might be safer at home, although Mia loves bringing him to kindergarten.",
            "You are concerned that Bruno has disappeared, but the situation does not completely surprise you. Mia regularly misplaces gloves, water bottles and small toys. Only last month she claimed Bruno had been ‘stolen’, and he eventually turned up inside her own backpack.",
            "Your bigger concern is how certain Mia is that Oliver took the teddy. Before the conversation, she told you that Oliver is ‘always taking things’. You do not know whether that is fair or true, and you do not want her making a serious accusation without evidence. You want Bruno found, but you also want the adults to understand why Mia has become so convinced that Oliver is responsible."
          ],
          challenge: [
            "Bruno has been part of family life for years. His financial value is almost nothing, but emotionally he matters enormously because Mia has slept with him since she was very young. You have repeatedly suggested that such an important toy might be safer at home, but Mia strongly prefers bringing him to kindergarten.",
            "Although you are worried about the disappearance, you are not entirely surprised. Mia frequently misplaces everyday belongings, and only last month she announced that Bruno had been ‘stolen’ before he was eventually discovered inside her own backpack.",
            "What concerns you most is the confidence with which Mia is accusing Oliver. On the way into the conversation she described him as someone who is ‘always taking things’, yet you have no idea whether that judgement is accurate. You want the teddy recovered, of course, but you also want to avoid a situation in which another child is labelled dishonest simply because Mia is frightened and searching for an explanation."
          ]
        }
      }
    }
  },

  {
    id: "birthday-cake",
    title: "The Birthday Cake Problem",
    setting: "A birthday morning and an allergy concern",
    preview: "A homemade birthday cake arrives with good intentions, but its ingredients create a difficult safety decision.",
    icon: "🎂",
    groupSizes: [3, 4],
    roleOrder3: ["david", "emma", "ingrid"],
    roleOrder4: ["david", "emma", "ingrid", "jonas"],
    roles: {
      david: {
        name: "David · parent",
        starter: true,
        starterCue: "You arrive first with Emma and the cake. Begin naturally by greeting the worker, presenting the cake and explaining that you checked the ingredients because you knew about the allergy.",
        levels: {
          supported: [
            "Your daughter Emma has talked about her fifth birthday for weeks. Last night she helped you make a chocolate cake with strawberries, sprinkles and lots of icing. She is very proud of it.",
            "A few days ago, you asked a kindergarten worker if you could bring a homemade birthday cake. You remember hearing, ‘Yes, that should be fine.’ You knew one child has a nut allergy, so you made the cake without nuts.",
            "This morning, another worker reads the chocolate package and sees that it ‘may contain traces’ of nuts. Now the kindergarten may not serve the cake. You understand that allergies are serious, but you are frustrated because you asked first, spent the evening baking, and Emma is standing next to you hearing the whole discussion."
          ],
          standard: [
            "Your daughter Emma has been talking about her fifth birthday for almost a month. Last night she helped you decorate a homemade chocolate cake with strawberries, sprinkles and far too much icing. She is extremely proud of what the two of you made.",
            "A few days ago, you asked one of the kindergarten workers whether families were allowed to bring homemade birthday cake. You remember being told, ‘Yes, that should be fine.’ Because you know that one child in the group has a nut allergy, you deliberately made the cake without nuts and checked the ingredients you used.",
            "When you arrive this morning, another worker looks at the chocolate packaging and notices a warning that it ‘may contain traces’ of nuts. You are told that the cake may not be safe to serve. You understand why allergies matter, but you are frustrated: you asked in advance, spent your evening making the cake, and Emma is standing beside you listening as adults discuss whether her birthday cake can be used at all."
          ],
          challenge: [
            "Your daughter Emma has been anticipating her fifth birthday for weeks. The night before, she enthusiastically helped you decorate a homemade chocolate cake with strawberries, sprinkles and an excessive amount of icing, and she arrived at kindergarten feeling extremely proud of her contribution.",
            "Several days earlier, you had specifically asked a staff member whether bringing a homemade birthday cake was acceptable. Your clear memory is that you were told, ‘Yes, that should be fine.’ Aware that one child in the group has a nut allergy, you intentionally avoided nuts and checked the ingredients you used while baking.",
            "This morning, however, a different worker examines the chocolate wrapper and notices the manufacturer’s warning that the product ‘may contain traces’ of nuts. Suddenly the cake may not be served. You fully accept that an allergy must be taken seriously, yet you also feel understandably frustrated: you sought permission beforehand, invested time in preparing the cake safely, and now Emma is standing next to you while adults discuss whether the centrepiece of the birthday she has been imagining can be used at all."
          ]
        }
      },
      emma: {
        name: "Emma · birthday child",
        starter: false,
        levels: {
          supported: [
            "Today is finally your birthday. You helped make the cake. Your biggest job was putting strawberries on top, although you secretly ate two strawberries while Dad was not looking.",
            "You have already told almost everyone there will be chocolate cake. Yesterday you promised your friend Lea the piece with the biggest strawberry.",
            "Now an adult says maybe nobody can eat the cake. You do not understand why because Dad says there are no nuts in it. You are worried your birthday will be ruined. You think the child with the allergy could simply eat something different. To you, that sounds fair."
          ],
          standard: [
            "Today is finally your fifth birthday. You helped make the cake yourself, and your most important job was putting strawberries on top, although you secretly ate two strawberries when Dad was not looking.",
            "You have already told almost everyone at kindergarten that there will be chocolate cake. Yesterday you even promised your friend Lea that she could have the slice with the biggest strawberry.",
            "Now one of the adults is saying that perhaps nobody can eat your cake. You do not really understand the problem because Dad told you there are no nuts in it. You are starting to worry that your birthday will be ruined and that the other children will be disappointed. You have what seems like an easy solution: the child who cannot eat the cake could have something different. In your mind, that would be completely fair."
          ],
          challenge: [
            "Your fifth birthday has finally arrived, after weeks of waiting. You helped prepare the cake yourself and were given the important responsibility of arranging the strawberries, although you also managed to eat two when Dad was not paying attention.",
            "You have spent the last day enthusiastically informing almost everyone at kindergarten that there will be chocolate cake. You even promised your friend Lea the slice with the largest strawberry, so the cake now feels like an important part of the celebration you have been imagining.",
            "The adults are suddenly discussing whether the cake can be served at all. This makes very little sense to you because Dad has already said that there are no nuts in it. You are increasingly worried that your birthday will be spoiled and that your friends will be disappointed. From your point of view, there is an obvious solution: the child with the allergy could simply be given a different treat, allowing everyone else to eat the cake as planned."
          ]
        }
      },
      ingrid: {
        name: "Ingrid · kindergarten worker",
        starter: false,
        levels: {
          supported: [
            "You are receiving the children this morning. When David arrives with Emma and a homemade cake, you immediately think about a child in the group who has a serious nut allergy.",
            "The kindergarten has safety rules for allergies. You cannot simply assume a homemade cake is safe. When David shows you the chocolate package, you see the warning that it may contain traces of nuts.",
            "You feel bad because Emma is clearly excited. You also understand why David is annoyed because he says another worker told him the cake was okay. You were not part of that conversation. You need to keep the children safe, but you also want Emma’s birthday to feel special."
          ],
          standard: [
            "You are responsible for receiving the children this morning. When David arrives with Emma and a homemade chocolate cake, your first thought is about a child in the group who has a serious nut allergy.",
            "The kindergarten has procedures for food allergies, and you cannot simply assume that a homemade cake is safe. When David shows you the packaging from the chocolate he used, you notice the warning that it may contain traces of nuts.",
            "You feel bad because Emma is obviously excited about sharing the cake. You also understand David’s frustration because he says another member of staff already told him that homemade cake was fine, and you were not present for that conversation. You do not want the discussion to become an argument about whether the allergy is ‘serious enough’. Your responsibility is safety, but you would also like to find a way for Emma’s birthday to remain a positive celebration."
          ],
          challenge: [
            "You are the staff member receiving children this morning. As soon as David and Emma arrive carrying a homemade chocolate cake, you think of a child in the group with a significant nut allergy.",
            "The kindergarten’s food-allergy procedures require more than simply checking whether nuts were intentionally added. A homemade cake introduces uncertainty, and when David shows you the chocolate packaging, you immediately notice the manufacturer’s warning that the product may contain traces of nuts.",
            "You feel genuinely sorry for Emma, who is clearly excited about sharing something she helped make. You also understand why David is frustrated: according to him, a colleague had already said that bringing homemade cake would be acceptable, and you were not part of that earlier exchange. You need to prevent the conversation from turning into a debate over how serious the allergy is while still recognising the family’s good intentions and preserving Emma’s sense that her birthday is being celebrated."
          ]
        }
      },
      jonas: {
        name: "Jonas · kindergarten worker",
        starter: false,
        levels: {
          supported: [
            "A few days ago, David asked you if families could bring birthday cakes. You remember saying that birthday cake was normally fine. You also think you said something about checking ingredients because of allergies, but now you are not completely sure what words you used.",
            "When you see David with the cake and Ingrid explaining the problem, you realise your earlier answer may have caused confusion. You feel embarrassed.",
            "You agree that the allergy must be taken seriously. At the same time, you think Ingrid is saying no very quickly. You want to help find another solution, but you may also have to admit that you did not explain the rules clearly enough."
          ],
          standard: [
            "A few days ago, David asked you whether families were allowed to bring birthday cakes. You remember telling him that birthday cake was normally fine, but you also remember saying something about checking ingredients because of allergies. The problem is that you are no longer completely sure exactly how clearly you explained that part.",
            "When you see David standing with the cake while Ingrid explains the allergy concern, you immediately realise that your earlier conversation may have contributed to the misunderstanding. You feel slightly embarrassed because David genuinely appears to believe he received permission.",
            "You agree that the child’s allergy must be treated seriously. At the same time, you think Ingrid is moving towards a complete ‘no’ before considering whether there are any safe alternatives for the celebration. You want to help solve the situation, but doing that may require you to admit in front of everyone that your original explanation was not clear enough."
          ],
          challenge: [
            "Several days ago, David asked you directly whether families were allowed to bring birthday cakes. You clearly remember saying that birthday cake was normally acceptable, and you have a less certain memory of adding that ingredients would still need to be checked because of allergies. You cannot honestly reconstruct the exact wording you used or how strongly you emphasised the condition.",
            "Seeing David with the cake while Ingrid explains the safety concern makes you realise that your earlier answer may have created the present misunderstanding. You feel uncomfortable because David’s interpretation is not unreasonable; he genuinely believed he had received permission to proceed.",
            "You fully agree that the allergy cannot be treated casually, yet you also feel Ingrid is moving rather quickly towards refusing the cake without first discussing possible alternatives for the birthday celebration. You want to help the group reach a practical solution, while recognising that you may need to take responsibility for communicating the kindergarten’s expectations too vaguely in the first place."
          ]
        }
      }
    }
  },

  {
    id: "outside",
    title: "The Child Who Does Not Want to Go Outside",
    setting: "A child has started avoiding outdoor play",
    preview: "A sudden dislike of outdoor time may be connected to a popular chasing game that feels very different depending on who is playing.",
    icon: "🌧️",
    groupSizes: [3, 4],
    roleOrder3: ["sofie", "marianne", "thomas"],
    roleOrder4: ["sofie", "marianne", "thomas", "camilla"],
    roles: {
      sofie: {
        name: "Sofie · child",
        starter: false,
        levels: {
          supported: [
            "You used to like outdoor time. Recently, some older children started a game called ‘Wolf Pack’. They chase people, capture them and put them in a pretend wolf prison behind the climbing frame.",
            "At first you thought the game was fun. Then it became rougher. Two days ago, three children surrounded you and would not let you leave the prison even when you said you were finished. One child laughed and called you a baby.",
            "Since then, you have tried to avoid going outside. You say your stomach hurts, your boots are uncomfortable or it is too cold. You have not told an adult about Wolf Pack because you are afraid they will stop the game completely. You still want the other children to like you; you just do not want to be chased anymore."
          ],
          standard: [
            "You used to enjoy outdoor time. Recently, however, some of the older children have become very interested in a game called ‘Wolf Pack’. They chase other children, capture them and put them inside a pretend wolf prison behind the climbing frame.",
            "At first you thought the game was exciting. Gradually it became rougher. Two days ago, three children surrounded you and would not let you leave the prison even after you said you were finished. One of them laughed and called you a baby.",
            "Since then, you have tried to avoid going outside. At home you say your stomach hurts, and at kindergarten you complain that your boots are uncomfortable or that the weather is too cold. You have not explained the real reason because you are afraid the adults will stop Wolf Pack completely and the other children will blame you. You still want to be included; you simply do not want to be chased or trapped anymore."
          ],
          challenge: [
            "Until recently, you generally enjoyed outdoor play. Over the past few weeks, though, a group of older children have become absorbed in a game called ‘Wolf Pack’, where players chase one another, capture people and place them in an imaginary prison behind the climbing frame.",
            "Initially you found the game exciting and willingly took part. As the children became more competitive, however, the play became rougher. Two days ago, three children surrounded you and continued keeping you inside the ‘prison’ even after you clearly said you were finished. One child laughed and called you a baby when you tried to leave.",
            "Since that incident, you have developed different excuses to avoid outdoor time: stomach aches in the morning, uncomfortable boots, cold weather or unfinished indoor activities. You have deliberately avoided telling an adult about Wolf Pack because you fear the game will be banned entirely and the other children will blame you for ruining it. You still want their friendship and inclusion; what you no longer want is to be chased, trapped or ignored when you say you are done."
          ]
        }
      },
      marianne: {
        name: "Marianne · Sofie’s parent",
        starter: true,
        starterCue: "You asked for this conversation. Begin by explaining that Sofie has had stomach aches and has started saying she does not want to go outside, and that the change worries you.",
        levels: {
          supported: [
            "For the last week, mornings have become difficult. Sofie says her stomach hurts before kindergarten, but the pain often disappears later in the day.",
            "At first you thought she might be sick. Then she started complaining especially about outdoor time. She said her waterproof trousers were uncomfortable, so you even bought new ones. Nothing changed.",
            "Yesterday she suddenly asked, ‘Do I have to play with someone if they say I have to?’ That worried you. You do not want to accuse anyone of bullying without knowing what happened, but you want the kindergarten to take the change seriously."
          ],
          standard: [
            "For the last week, mornings have become noticeably more difficult. Sofie often says she has a stomach ache before kindergarten, although the pain usually seems to disappear later in the day.",
            "At first you thought she might be getting ill. Then she began complaining specifically about outdoor time. She blamed her clothes, so when she said her waterproof trousers were uncomfortable, you even bought a new pair. It made no difference.",
            "Yesterday Sofie unexpectedly asked you, ‘Do I have to play with someone if they say I have to?’ That question made you wonder whether something is happening at kindergarten that she has not explained. You do not want to overreact or accuse other children of bullying without evidence, but you do want the kindergarten to take this sudden change in her behaviour seriously."
          ],
          challenge: [
            "Over the past week, mornings have become unusually difficult. Sofie has repeatedly complained of stomach aches before kindergarten, yet the discomfort often disappears later, which has made you wonder whether anxiety rather than illness is involved.",
            "Initially you assumed she might be unwell. Her complaints then became closely connected to outdoor time. When she claimed her waterproof trousers were uncomfortable, you even replaced them, hoping a practical solution would solve the problem. Her reluctance remained exactly the same.",
            "Yesterday she suddenly asked, ‘Do I have to play with someone if they say I have to?’ The question stayed with you because it sounded as though she was trying to ask for help without explaining the full situation. You are determined not to label ordinary conflict as bullying without evidence, but you also do not want her behavioural change dismissed as simple stubbornness or a preference for indoor activities."
          ]
        }
      },
      thomas: {
        name: "Thomas · kindergarten worker",
        starter: false,
        levels: {
          supported: [
            "You have noticed that Sofie is very slow when everyone gets ready to go outside. She suddenly needs the toilet, cannot find her gloves or wants to finish a drawing first.",
            "You thought she simply preferred being indoors because she loves drawing. But yesterday, when several children shouted ‘Wolf Pack!’, Sofie immediately moved close to you. When one child asked her to join, she shook her head and would not explain.",
            "You know the Wolf Pack game. You have seen children running, laughing and using a pretend prison. Until now it looked like normal play. You are beginning to wonder if the game feels very different to Sofie."
          ],
          standard: [
            "You have noticed that Sofie has become unusually slow whenever the group prepares to go outside. She suddenly needs the toilet, cannot find her gloves or insists that she must finish a drawing before getting dressed.",
            "You originally assumed she simply preferred indoor activities because she loves drawing and can stay at the craft table for a long time. Yesterday, however, several children shouted ‘Wolf Pack!’ outside and Sofie immediately moved over to stand very close to you. When one child invited her to join the game, she shook her head but refused to explain why.",
            "You are familiar with Wolf Pack. You have seen children running, laughing and placing each other in a pretend prison behind the climbing frame. Until now, it looked like energetic but ordinary play. Sofie’s reaction has made you wonder whether the game feels very different to at least one of the children involved."
          ],
          challenge: [
            "You have become increasingly aware that Sofie delays the transition to outdoor play. Just as the group starts getting dressed, she suddenly needs the toilet, cannot locate her gloves or insists that an unfinished drawing requires immediate attention.",
            "At first, you interpreted the pattern as a simple preference for indoor activities, particularly because Sofie can remain deeply focused at the craft table. Yesterday changed your impression. The moment several children shouted ‘Wolf Pack!’ outside, Sofie moved directly towards you and stayed physically close. When another child invited her to join, she immediately refused but would not explain her reaction.",
            "You know the Wolf Pack game and have previously observed plenty of running, laughter and children voluntarily entering a pretend prison behind the climbing frame. From the outside it appeared to be normal, energetic play. Sofie’s behaviour now makes you question whether adult observers have been assuming that visible excitement means every child is experiencing the game in the same way."
          ]
        }
      },
      camilla: {
        name: "Camilla · kindergarten worker",
        starter: false,
        levels: {
          supported: [
            "You spend a lot of time outside with the older children and know the Wolf Pack game well. Most of the time the children look happy, but sometimes they get so excited that they stop listening when someone wants to leave the game.",
            "Earlier this week, you heard Sofie say, ‘I’m not playing anymore.’ A few seconds later, another child chased her again. You called out that they must listen when someone says stop, and the game moved somewhere else.",
            "At the time, you did not think it was a big incident. Now that you hear Sofie has been avoiding outdoor time, you realise it may have mattered much more to her than you understood."
          ],
          standard: [
            "You spend more time outside with the oldest children than Thomas does, so you know the Wolf Pack game quite well. Most of the time everyone appears to enjoy it. However, you have noticed that the children sometimes become so excited that they stop listening properly when somebody tries to leave the game.",
            "Earlier this week, you clearly heard Sofie say, ‘I’m not playing anymore.’ Only a few seconds later, another child began chasing her again. You called out that they needed to listen when someone said stop, and the group moved the game to another part of the playground.",
            "At the time, you did not consider it a major incident because the situation ended quickly. Now that you are hearing about Sofie’s stomach aches and attempts to avoid outdoor time, you realise that the moment may have affected her much more strongly than you understood."
          ],
          challenge: [
            "Because you spend a large amount of time outdoors with the oldest children, you are particularly familiar with the Wolf Pack game. Most sessions appear enjoyable and voluntary, although you have noticed a recurring problem: once the chase becomes exciting, some children become poor at recognising when another player is genuinely trying to withdraw.",
            "Earlier this week, you distinctly heard Sofie say, ‘I’m not playing anymore.’ Within seconds, another child began chasing her again. You intervened verbally, reminding the group that ‘stop’ needed to be respected, and the game shifted to another area of the playground.",
            "At the time, the incident seemed brief and successfully resolved, so you did not treat it as a serious concern. Hearing now that Sofie has developed stomach aches and strategies for avoiding outdoor time forces you to reconsider that judgement. What looked minor from an adult perspective may have been a much more significant experience for her."
          ]
        }
      }
    }
  },

  {
    id: "more-learning",
    title: "The Parent Who Wants More Learning",
    setting: "A discussion about play, learning and school preparation",
    preview: "A parent worries that kindergarten is mostly play, while the child and staff have different ideas about what learning looks like.",
    icon: "🔤",
    groupSizes: [3, 4],
    roleOrder3: ["rania", "adam", "silje"],
    roleOrder4: ["rania", "adam", "silje", "marius"],
    roles: {
      rania: {
        name: "Rania · parent",
        starter: true,
        starterCue: "You requested the conversation. Begin by explaining that Adam starts school next year and that you are worried he may not be learning enough letters, numbers and other school skills.",
        levels: {
          supported: [
            "Your son Adam starts school next year, and you are worried he is not ready. Your sister has a daughter the same age who goes to another kindergarten. She can write her full name, knows many letters and can do simple addition.",
            "When you ask Adam what he did at kindergarten, he usually says things like ‘we built a shop’, ‘we played pirates’ or ‘I made soup from mud’. You rarely hear about letters or numbers.",
            "You know children need to play, and you do not want kindergarten to become school. Still, you think there should be more organised learning before first grade. You want to know what Adam is actually learning during the day."
          ],
          standard: [
            "Your son Adam will start school next year, and lately you have become worried that he may not be prepared. Your sister has a daughter the same age at another kindergarten. She can already write her full name, recognise many letters and solve simple addition problems.",
            "When you ask Adam what he did at kindergarten, his answers are usually things like, ‘We built a shop,’ ‘We played pirates,’ or ‘I made soup from mud.’ You rarely hear him mention letters, numbers or activities that sound like school preparation.",
            "You understand that young children need plenty of play, and you do not expect kindergarten to become a classroom. Even so, you believe there should be more organised learning before children enter first grade. You asked for this conversation because you want to understand what Adam is actually learning and whether he needs more structured practice."
          ],
          challenge: [
            "Your son Adam begins school next year, and you have become increasingly concerned about whether he is academically prepared for the transition. Your sister’s daughter is the same age but attends a different kindergarten; she can already write her full name, identify numerous letters and complete simple addition tasks.",
            "By contrast, when you ask Adam what he has done during the day, he usually describes activities such as building a pretend shop, playing pirates or making ‘soup’ from mud. Those experiences may be enjoyable, but they do not sound to you like deliberate preparation for reading, writing or mathematics.",
            "You are not opposed to play and have no desire to turn kindergarten into primary school. Nevertheless, you believe some structured learning should occur before first grade, particularly when other children of the same age seem further ahead in visible academic skills. You requested the meeting because you want a clearer explanation of what Adam is learning and whether the staff should offer him more organised challenges."
          ]
        }
      },
      adam: {
        name: "Adam · child",
        starter: false,
        levels: {
          supported: [
            "You like kindergarten. Your favourite activity now is a shop you and your friends made from cardboard boxes.",
            "You made signs, wrote prices and created pretend money. Yesterday you sold a banana for 157 kroner because you thought that sounded very expensive. You also like building tall towers with blocks.",
            "At home, Mum sometimes asks you to practise letters. You usually say no because it feels like homework. You can write your first name, although some letters are backwards. You do not understand why the adults are worried about learning. You think you learn things all the time."
          ],
          standard: [
            "You enjoy kindergarten, and your favourite activity at the moment is the shop you and your friends created from cardboard boxes.",
            "You have made signs for the shop, written prices on pieces of paper and created pretend money. Yesterday you sold a banana for ‘157 kroner’ because you thought that sounded extremely expensive. You also enjoy building with blocks and experimenting with ways to make towers taller than Marius.",
            "At home, Mum sometimes asks if you want to practise letters, but you usually say no because it feels like homework. You can already write your first name, although some of the letters occasionally face the wrong way. You are confused about why the adults are having a serious conversation about learning. From your point of view, you learn things all the time—you just do not call them lessons."
          ],
          challenge: [
            "You are happy at kindergarten and are currently fascinated by a pretend shop that you and your friends constructed from cardboard boxes.",
            "The game has involved making signs, writing prices, creating your own paper money and negotiating with customers. Yesterday you priced a banana at ‘157 kroner’ simply because the number sounded impressively expensive. You also spend a great deal of time building with blocks and experimenting with how to make structures taller and stronger.",
            "At home, Mum sometimes suggests practising letters, but you usually refuse because it feels too much like homework. You can write your first name, even if some letters occasionally end up backwards. You are genuinely puzzled by the serious adult discussion about whether you are learning enough. In your experience, you are constantly discovering how numbers, words, building and other people work—you just experience that learning as play."
          ]
        }
      },
      silje: {
        name: "Silje · kindergarten worker",
        starter: false,
        levels: {
          supported: [
            "You know Rania is worried about school preparation. You understand the worry, but you think Adam is developing well.",
            "In the pretend shop, you have seen him count objects, compare prices, make signs, negotiate rules and practise writing because he wanted customers to understand him. Last month he spent almost an hour trying different ways to build a bridge from wooden blocks.",
            "You do not think young children need many worksheets. You want to explain that play can include real learning. You also want to listen to Rania and perhaps make the learning more visible to families."
          ],
          standard: [
            "You know Rania is concerned about school preparation. You understand why comparisons with other children can create worry, but from your professional perspective Adam is developing well.",
            "During the last few weeks, you have watched him create a pretend shop with other children. He has counted objects, compared prices, made signs, negotiated rules and practised writing because he wanted customers to understand him. Last month he spent nearly an hour testing different ways to build a bridge from wooden blocks.",
            "You do not believe young children need large amounts of worksheet-based teaching. To you, these play situations are valuable learning experiences precisely because Adam is interested in them. At the same time, you do not want to dismiss Rania’s concern. You would like to explain what is happening through play and perhaps find better ways to show families the learning that they do not always see."
          ],
          challenge: [
            "You are aware that Rania is anxious about school readiness. You understand how easily parents can become concerned when another child displays more visible academic skills, yet your professional assessment is that Adam is developing well across several important areas.",
            "In the pretend shop, for example, you have observed him counting objects, comparing prices, creating signs, negotiating social rules and practising writing because written information served a genuine purpose in the game. Last month he spent close to an hour testing different designs for a wooden-block bridge, adjusting the structure each time it collapsed.",
            "You are cautious about introducing large amounts of worksheet-based instruction because you believe young children often learn most deeply when literacy, numeracy and problem-solving emerge from meaningful play. Still, you do not want to respond defensively to Rania. Her concern is real, and the kindergarten may need to become better at making children’s learning visible rather than assuming families automatically recognise the educational value of play."
          ]
        }
      },
      marius: {
        name: "Marius · kindergarten worker",
        starter: false,
        levels: {
          supported: [
            "You mostly agree with Silje, but you also think Rania has a point. Some children who start school next year are very interested in letters, numbers and English words.",
            "Recently you made a voluntary ‘word detective’ activity where children looked for letters around the kindergarten. Adam joined once and actually enjoyed it.",
            "You do not want kindergarten to become a classroom full of worksheets. But you think staff can protect play and also offer short, organised activities for children who are interested."
          ],
          standard: [
            "You mostly agree with Silje’s view of play-based learning, but you also think Rania has a reasonable point. Several children who will start school next year are showing strong interest in letters, numbers and English words.",
            "Recently you created a short, voluntary ‘word detective’ activity where children searched for letters around the kindergarten. Adam joined on one occasion and actually enjoyed it once he became involved.",
            "You would never want kindergarten to become a classroom filled with worksheets. However, you think staff can protect free play while also offering more short, structured activities for children who are interested. You suspect Silje worries that agreeing with Rania at all will sound like criticism of play-based learning, while you see the two approaches as compatible."
          ],
          challenge: [
            "Your overall philosophy is close to Silje’s, but you also believe Rania is raising a legitimate question. A number of children approaching school age are actively curious about letters, numbers and English vocabulary, and you think that curiosity can sometimes be met through short, deliberately structured experiences.",
            "For example, you recently introduced an optional ‘word detective’ activity in which children searched the kindergarten environment for particular letters. Adam initially joined without much enthusiasm but soon became absorbed in the challenge and appeared proud when he found examples independently.",
            "You have no interest in replacing play with worksheets or turning the kindergarten into an early primary-school classroom. Your position is that playful, child-led learning and brief adult-led activities can coexist. You suspect Silje is concerned that conceding any part of Rania’s argument could be interpreted as rejecting play-based pedagogy, whereas you view the discussion as an opportunity to broaden the range of experiences offered."
          ]
        }
      }
    }
  },

  {
    id: "rough-play",
    title: "The Rough Play Complaint",
    setting: "A physical game ended with a bruise",
    preview: "Two friends often enjoy wild games, but this time one child got hurt and nobody agrees on exactly when the fun stopped.",
    icon: "🦸",
    groupSizes: [4],
    roleOrder3: [],
    roleOrder4: ["leo", "noah", "eva", "martin"],
    roles: {
      leo: {
        name: "Leo · child",
        starter: false,
        levels: {
          supported: [
            "You and Noah often play superheroes, dinosaurs and monsters. Usually you love the wild games. Your favourite is ‘Lava Monster’, where one person chases everyone else.",
            "Yesterday Noah was the monster. He caught you near the climbing frame and grabbed your arm. You said, ‘No, no, no!’ At first you were still laughing because the game was exciting. Then Noah pushed you, or maybe tagged you very hard, and you fell against the wooden edge of the sandbox. It hurt and later you had a big bruise.",
            "When Mum asked what happened, you said, ‘Noah hit me.’ That was the easiest way to explain it. Now you are not sure ‘hit’ is exactly right. What you do know is that near the end, you really wanted Noah to stop."
          ],
          standard: [
            "You and Noah often play superheroes, dinosaurs and monsters together. Usually you enjoy the physical games as much as he does. Your favourite is ‘Lava Monster’, where one player becomes the monster and tries to catch everyone else.",
            "Yesterday Noah was the monster. He caught you near the climbing frame and grabbed your arm. You shouted, ‘No, no, no!’ but at first you were still laughing because the game was exciting. Then he pushed you—or perhaps tried to tag you very hard—and you fell against the wooden edge of the sandbox. It hurt, and later you had a large bruise.",
            "When Mum asked what had happened, you said, ‘Noah hit me.’ At the time, that felt like the easiest way to explain the injury. Now that everyone is discussing it seriously, you are not completely sure that ‘hit’ is the right word. What you are sure about is that near the end of the game, you genuinely wanted Noah to stop."
          ],
          challenge: [
            "You and Noah regularly choose highly physical games involving superheroes, dinosaurs and monsters, and most of the time you enjoy that style of play just as much as he does. ‘Lava Monster’, in which one player chases and captures the others, is one of your favourites.",
            "Yesterday Noah was the monster. He caught you near the climbing frame and grabbed your arm. You shouted, ‘No, no, no!’ while still laughing at first, because excitement and protest are often mixed together in the game. Moments later, he either pushed you or attempted an unusually forceful tag, and you fell sideways against the wooden edge of the sandbox. The impact hurt and later produced a noticeable bruise.",
            "When Mum asked what had happened, you summarised the event by saying, ‘Noah hit me.’ That description now feels less precise than it did at home. You cannot clearly separate every movement in the final seconds of the game, but you do remember an important change: by the end, your ‘no’ was no longer part of pretending. You genuinely wanted the physical play to stop."
          ]
        }
      },
      noah: {
        name: "Noah · child",
        starter: false,
        levels: {
          supported: [
            "Leo is one of your favourite people to play with because he likes wild games too. Sometimes he is the monster and sometimes you are.",
            "Yesterday you were playing Lava Monster. Leo was running away and laughing. When you caught him, he shouted ‘No, no, no!’ but he often says that during the game. You thought he was pretending. You reached toward him, and he suddenly fell into the sandbox. You do not think you pushed him hard, and you definitely did not punch him.",
            "Now Leo has told his mum that you hit him. You feel betrayed because Leo has chased, grabbed and knocked you over in the same game before. You are worried the adults will stop you from playing together."
          ],
          standard: [
            "Leo is one of your favourite people to play with because he enjoys wild physical games just as much as you do. Sometimes he becomes the monster and sometimes you do.",
            "Yesterday you were playing Lava Monster. Leo was running away and laughing. When you caught up with him, he shouted, ‘No, no, no!’ but he often says things like that as part of the game, so you thought he was pretending. You reached towards him and he suddenly fell sideways into the sandbox. You do not believe you pushed him hard, and you definitely did not punch or deliberately hit him.",
            "Today you learned that Leo told his mum you hit him. You feel betrayed because Leo has chased, grabbed and knocked you over many times during the same kind of play. You are worried the adults will decide you are dangerous or tell the two of you that you are no longer allowed to play together."
          ],
          challenge: [
            "Leo is one of your closest playmates precisely because he usually enjoys energetic, physical games as much as you do. The two of you regularly switch roles, so on some days he is the monster chasing you and on other days you are the one doing the chasing.",
            "During yesterday’s Lava Monster game, Leo was running away while laughing. When you caught him, he shouted, ‘No, no, no!’ but similar protests are often part of the pretend game, so you interpreted his words as playful rather than serious. You reached towards him, and he suddenly fell sideways into the sandbox. You do not remember using enough force to push him down, and you are certain you did not punch or intentionally strike him.",
            "Hearing that Leo later told his mother you ‘hit’ him feels deeply unfair. Leo has chased, grabbed and knocked you over during the same game on many occasions, usually with both of you laughing afterwards. You are now worried that one confusing accident will cause the adults to label you as aggressive or ban a friendship and style of play that both of you normally enjoy."
          ]
        }
      },
      eva: {
        name: "Eva · Leo’s parent",
        starter: true,
        starterCue: "You asked for the conversation. Begin by explaining that you found a large bruise and that Leo first told you Noah had hit him, but that the story became less clear when you asked more questions.",
        levels: {
          supported: [
            "Yesterday evening, you noticed a dark bruise on Leo’s side. When you asked what happened, he immediately said, ‘Noah hit me at kindergarten.’ That worried you.",
            "You know Leo and Noah often play together and that their games can be wild. Later, when you asked more questions, Leo’s story changed. First Noah ‘hit’ him, then Noah ‘pushed’ him, and then Leo said they were playing Lava Monster.",
            "You are not trying to get Noah in trouble. You understand that children have accidents. What worries you is whether Leo wanted the game to stop and nobody noticed. You want to understand what happened and how the kindergarten handles rough play."
          ],
          standard: [
            "Yesterday evening you noticed a dark bruise on Leo’s side. When you asked what had happened, he immediately said, ‘Noah hit me at kindergarten.’ The statement frightened and upset you.",
            "You already knew that Leo and Noah often play together and that their games can become energetic. When you asked more questions later, however, Leo’s explanation became less clear. First Noah had ‘hit’ him, then Noah had ‘pushed’ him, and finally Leo explained that they had been playing Lava Monster.",
            "You are not interested in getting Noah into trouble, and you understand that children sometimes get hurt during active play. Your real concern is whether Leo tried to end the game and nobody recognised it. You want to understand what the adults saw and how the kindergarten decides when rough play is still enjoyable and when it needs to stop."
          ],
          challenge: [
            "Yesterday evening, while helping Leo get ready for bed, you noticed a dark bruise on his side. When you asked for an explanation, his immediate answer was, ‘Noah hit me at kindergarten.’ Hearing that another child had apparently hit him was naturally alarming.",
            "You were already aware that Leo and Noah frequently choose energetic physical games, and you had never assumed every bruise meant something serious. As you asked follow-up questions, the account became more complicated: first Noah had ‘hit’ him, then he had ‘pushed’ him, and eventually Leo explained that the incident occurred during their familiar Lava Monster game.",
            "Your aim is not to punish Noah or turn a playground accident into a major accusation. What concerns you is the possibility that a game which began as mutually enjoyable continued after Leo genuinely wanted it to end. You therefore want a clear discussion about what the staff observed, how children communicate consent during rough play, and how adults can distinguish pretend protests from a real request to stop."
          ]
        }
      },
      martin: {
        name: "Martin · kindergarten worker",
        starter: false,
        levels: {
          supported: [
            "You know Leo and Noah well. They often choose games with running, wrestling, superheroes and monsters. Both children usually enjoy this kind of play.",
            "You have talked to them before about checking that everyone still wants to play. The problem is that they often shout ‘Stop!’ and ‘No!’ as part of the game. Yesterday you saw the start of Lava Monster and reminded them to be careful. A few minutes later, while helping another child, you heard Leo cry. You did not see the exact moment he fell.",
            "You cannot honestly say whether Noah pushed Leo or whether Leo fell while trying to escape. You think the bigger issue is helping both children use a very clear signal when a physical game must stop immediately."
          ],
          standard: [
            "You know Leo and Noah well. They actively seek each other out and often choose games involving running, wrestling, superheroes or monsters. Both children normally appear to enjoy this style of play.",
            "You have spoken to them before about checking that everyone still wants to continue. The difficulty is that their pretend games often include shouting ‘Stop!’ and ‘No!’ as part of the story. Yesterday you saw the beginning of Lava Monster and reminded them to be careful. A few minutes later, while you were helping another child, you heard Leo cry. When you reached them, he had fallen beside the sandbox and Noah looked shocked.",
            "You did not witness the exact moment Leo fell, so you cannot honestly tell Eva whether Noah pushed him or whether Leo lost his balance while escaping. To you, the larger issue is teaching both children a clearer way to signal when physical play must stop immediately, rather than expecting them to read the difference between pretend and serious protests in the middle of an exciting game."
          ],
          challenge: [
            "You know Leo and Noah as children who deliberately seek out energetic, physical play together. Their preferred games regularly involve chasing, wrestling, superheroes and monsters, and both children usually appear equally enthusiastic.",
            "You have previously discussed the importance of checking whether everyone still wants to participate. The complication is that their imaginary games routinely include dramatic cries of ‘Stop!’ and ‘No!’ even when everyone is enjoying themselves. Yesterday you observed the beginning of Lava Monster and reminded them to control the physical intensity. Several minutes later, while assisting another child, you heard Leo cry. By the time you reached the sandbox, he had already fallen and Noah appeared genuinely shocked.",
            "Because you did not witness the crucial moment, you cannot responsibly claim that Noah pushed Leo, nor can you conclude that Leo simply lost his balance. The incident has highlighted a broader communication problem: when pretend resistance sounds identical to a genuine request to stop, both children need a clearer, agreed signal that immediately ends physical play without debate."
          ]
        }
      }
    }
  },

  {
    id: "photo",
    title: "The Photo That Should Not Have Been Shared",
    setting: "A kindergarten photo and unclear permission",
    preview: "A cheerful photo on the family platform reveals confusion about what a parent actually agreed to and how staff check consent.",
    icon: "📷",
    groupSizes: [3, 4],
    roleOrder3: ["karin", "ingrid", "ahmed"],
    roleOrder4: ["karin", "emil", "ingrid", "ahmed"],
    roles: {
      karin: {
        name: "Karin · parent",
        starter: true,
        starterCue: "You asked for the conversation. Begin by explaining that you saw Emil clearly visible in a photo on the family platform even though you believed you had restricted permission for sharing pictures of him.",
        levels: {
          supported: [
            "When Emil started kindergarten, you were careful with the photo forms. You are okay with staff taking some photos for internal documentation, but you do not want pictures of Emil shared widely or used publicly.",
            "Yesterday another parent told you about a photo on the kindergarten’s family app. Several children are showing a tall block tower, but Emil is clearly in the background making a silly face at the camera.",
            "You thought you had said no to sharing pictures of Emil. You are not furious about this one funny photo, but you are worried about the system. If staff misunderstood your permission once, you wonder where else photos could appear. You want to understand what happened rather than simply blame someone."
          ],
          standard: [
            "When Emil started kindergarten, you were careful when completing the forms about photography. You are comfortable with staff taking some pictures for internal documentation, but you do not want photographs of Emil shared widely or used publicly.",
            "Yesterday another parent mentioned a photograph posted through the kindergarten’s family communication platform. The main subject is a group of children proudly showing a tall block tower, but Emil is clearly visible in the background making a silly face directly at the camera.",
            "You were surprised because you believed you had restricted permission for sharing pictures of him. You are not furious about this particular photograph, which is fairly harmless, but the principle worries you. If staff misunderstood your choice once, you wonder whether pictures could also appear elsewhere. You asked for a conversation because you want to understand the process rather than simply identify somebody to blame."
          ],
          challenge: [
            "When Emil first started kindergarten, you paid particular attention to the photography permissions. You are comfortable with staff taking certain images for internal pedagogical documentation, but you deliberately tried to limit wider sharing and do not want pictures of Emil used publicly.",
            "Yesterday another parent drew your attention to a photograph posted on the kindergarten’s private family communication platform. The intended subject is several children proudly displaying a tall block tower; nevertheless, Emil is plainly visible in the background, looking directly at the camera while making an exaggerated silly face.",
            "The image itself does not make you angry. What concerns you is that you believed your original permissions prevented this type of sharing. If staff can interpret the same consent choices differently, you have no clear sense of where photographs might appear next. You therefore requested a conversation not to demand punishment, but to understand how the mistake occurred and whether the kindergarten’s system is reliable enough for families to make meaningful choices."
          ]
        }
      },
      emil: {
        name: "Emil · child",
        starter: false,
        levels: {
          supported: [
            "Yesterday some children built a huge tower, and Ingrid took a picture. You were not part of the tower group, but when you saw the camera, you jumped behind them and made your funniest monster face. You thought it was hilarious, and Ingrid laughed when she noticed.",
            "Now Mum says there is a problem because you are in the photo. You do not understand why. You like having your picture taken and sometimes ask to see photos of yourself on the kindergarten tablet.",
            "You remember Mum saying something about photos when you started kindergarten, but adults say many boring things about forms. To you, this is only a funny picture, and you hope nobody deletes it."
          ],
          standard: [
            "Yesterday some children built an enormous tower from wooden blocks, and Ingrid took a picture of them. You were not part of the tower group, but when you noticed the camera you quickly jumped into the background and made your funniest monster face. You thought it was hilarious, and Ingrid even laughed when she noticed you afterwards.",
            "Now Mum says there is a problem because you can be seen in the photograph. You do not really understand why. You like having your picture taken and sometimes ask to look at photographs of yourself on the kindergarten tablet.",
            "You remember Mum once saying something about pictures when you first started kindergarten, but adults talk about many forms and rules that do not seem important to you. From your point of view, you chose to be in this photograph and the result is funny. You hope the adults do not delete it simply because of a rule you do not understand."
          ],
          challenge: [
            "Yesterday a group of children completed an enormous wooden-block tower, and Ingrid decided to photograph them with their creation. Although you had not helped build it, you spotted the camera at the perfect moment, jumped into the background and pulled your most dramatic monster face. You considered the result extremely funny, and Ingrid laughed when she realised what you had done.",
            "You are now confused because Mum says your appearance in the photo has created a problem. From your perspective, being photographed is enjoyable; you often ask to see pictures of yourself on the kindergarten tablet and you deliberately chose to put yourself in this particular image.",
            "You vaguely remember Mum discussing photographs and forms when you started kindergarten, but those adult rules have never felt connected to your own experience. You therefore struggle to understand why a photograph you actively wanted to be part of might need to be removed. To you, the adults seem to be turning a harmless joke into something unnecessarily serious."
          ]
        }
      },
      ingrid: {
        name: "Ingrid · kindergarten worker",
        starter: false,
        levels: {
          supported: [
            "Yesterday some children spent a long time building a tall tower. They were proud, so you took a photo for the kindergarten’s private family app.",
            "You normally check photo permission before posting. The children in front of the tower all had permission. You noticed Emil making a face in the background, but you thought his family allowed photos on the private platform. You remembered only that he should not appear on public social media.",
            "Now you learn that Karin thought she had also limited photos on the family platform. You feel bad. You honestly thought you followed the information you had."
          ],
          standard: [
            "Yesterday a group of children spent nearly an hour building a tall structure from wooden blocks. They were extremely proud, so you took a photograph to share on the kindergarten’s private family communication platform.",
            "Before uploading pictures, you normally check whether the children shown have permission. The children posing with the tower were all fine. You did notice Emil making a face in the background, but you believed his family allowed photographs on the internal platform. What you clearly remembered was that he should not appear on the kindergarten’s public social media, and in your mind those were two separate permissions.",
            "This morning you learned that Karin believed she had also restricted pictures on the family platform. You feel bad about the mistake, but you genuinely thought you were following the information available to you rather than ignoring a parent’s wishes."
          ],
          challenge: [
            "Yesterday several children spent almost an hour constructing a tall wooden-block tower and were understandably proud of the result. You photographed them with the intention of sharing the achievement through the kindergarten’s private family communication platform.",
            "Your normal routine is to check photo permissions before posting. The children deliberately posing in the foreground all had the appropriate permission. You also noticed Emil making a silly face in the background, but your understanding was that his family permitted images on the closed family platform. What you remembered with certainty was a restriction on public social-media use, and you treated those two forms of sharing as distinct.",
            "Learning that Karin believed she had restricted internal sharing as well leaves you uncomfortable and apologetic. At the same time, you did not knowingly disregard her wishes; you acted on what you sincerely believed the permission record meant. You therefore want to understand whether the error came from your own interpretation, the way the choices were recorded, or a wider problem in the kindergarten’s routine."
          ]
        }
      },
      ahmed: {
        name: "Ahmed · kindergarten worker",
        starter: false,
        levels: {
          supported: [
            "You help manage some of the kindergarten’s digital communication. Yesterday Ingrid asked if the tower photo was okay to post. You looked at the children in front and said yes. You did not notice Emil in the background.",
            "You remember that Karin had some limits on photos, but the system is not very clear. Some families allow internal pictures but not public ones. Other families choose more limited options. Staff sometimes need to check several places.",
            "You do not think Ingrid was careless. You think the situation shows a problem with the routine. You also understand Karin’s worry: if the system is confusing for staff, parents cannot know exactly what will happen to each photo."
          ],
          standard: [
            "You help manage some of the kindergarten’s digital communication. Yesterday Ingrid asked you whether the tower photograph was okay to upload. You looked at the children in the foreground and said yes, but you did not notice Emil in the background.",
            "You remember that Karin had restrictions connected to photographs, although the system is not as clear as you would like. Some families allow internal pictures but not public ones, while others have chosen more limited arrangements. Staff sometimes need to check more than one place to be completely certain.",
            "You do not think Ingrid acted carelessly. In your view, the situation has exposed a weakness in the kindergarten’s routine. At the same time, you understand Karin’s concern. If the system is confusing even for staff members who use it regularly, families cannot reasonably be expected to know exactly what will happen to every photograph."
          ],
          challenge: [
            "Part of your role involves helping manage the kindergarten’s digital communication. Yesterday Ingrid showed you the tower photograph and asked whether it appeared safe to upload. You checked the children posing in the foreground and approved it, failing to notice Emil in the background.",
            "You do remember that Karin had placed restrictions on photographs, but the consent system is more complicated than it should be. Some families permit internal sharing while refusing public use; others make narrower choices, and the relevant information is not always visible in one clear location. Staff occasionally need to cross-check several records before they can be fully confident.",
            "For that reason, you do not believe the incident can be reduced to Ingrid being careless. You see it as evidence of a flawed routine in which well-intentioned staff can make different interpretations. Karin’s concern therefore seems reasonable to you: if experienced employees cannot instantly understand the system, parents cannot be expected to predict with confidence where a particular image of their child may appear."
          ]
        }
      }
    }
  }
];
