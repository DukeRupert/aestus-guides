---
title: "Draw Steel Elementalist Class Guide: In-Depth Tactical Analysis"
description: "A deep dive into Draw Steel's Elementalist: Essence, Persistence, Practical Magic, specializations, and ability picks from level 1 through 10."
slug: draw-steel-elementalist-class-guide
date: 2026-04-18 00:00:00+0000
lastmod: 2026-04-18 00:00:00+0000
image: guide-to-elementalist.webp
categories:
   - Draw Steel
tags:
   - Analysis
weight: 1
---

# Draw Steel Elementalist Class Guide: In-Depth Tactical Analysis

{{< youtube "KPLYAccAgKw" >}}

## Introduction

Hey folks, Aestus here, back with another entry in my series covering each of the nine base classes in Draw Steel's Heroes book with an in-depth tactical analysis. Today we're covering the **Elementalist**, which — I'll just say it up front — is my favorite class in the game.

If you haven't read the earlier entries, see my [Censor article](/articles/draw-steel-censor-class-guide/) (first in the series, with a longer intro explaining what I'm trying to do) and my [Conduit article](/articles/draw-steel-conduit-class-guide/).

As always, a note on what this series is and isn't. It is *not* a tier list. I'm not ranking each class against the others. Rather, I'm looking at each class individually, analyzing its abilities, and giving my opinions on how it plays tactically and how you can build it to get the most out of the role you want. It's also not a pure build guide, though you'll get build advice. My main goal is to make learning these classes more digestible.

I'm not aiming this at a beginner audience. I'll reference terms like the slowed condition, heroic resource, potency, and triggered actions, and I expect you to know the basics. If you don't, the Draw Steel rules compendium will get you up to speed.

### Summary Opinion

The Elementalist is a class that's slow to build momentum over a fight but ramps into an **area-control powerhouse**. More than most classes, they turn the battle map into your ally. They also function well as a secondary support class, buffing your team in meaningful ways.

They are simultaneously a **power gamer's dream and a power gamer's nightmare** — and the reason for that paradox is the class's heroic resource design. Essence is theoretically incredible thanks to the Persistence mechanic, which lets you recast heroic abilities for a fraction of their normal cost. But the HR tempo is so punishing that for the first few rounds of every combat, the Elementalist feels about 25% worse than every other class in the game. Then, once it finally gets going, it becomes one of the most powerful classes in the game.

Build-wise, the most exploitable strategies I've found center on **Invigorating Growth** (S-tier surge engine at 3 essence), **Instantaneous Excavation** (S-tier terrain manipulation at 5 essence), and most of all, the void Elementalist's 2nd-level feature, **No Space Between**, which is genuinely busted and, in my opinion, needs a nerf.

In terms of subclasses — called **specializations** for the Elementalist — you get four supported options. I consider **Void** the strongest by a meaningful margin, with **Green** a close second. There's a gap, then **Earth**, another gap, and then **Fire** trails as the weakest and, to me, least fun. We'll discuss why as we go.

This class has more S-ranked abilities on my spreadsheet than any class I've covered in this series so far. It's a fantastic class. It just makes you work for it.

## Starting Stats and Essence

Elementalists are a **Reason**-only primary attribute class (like the Conduit). Reason is a fine primary attribute — nothing special, but perfectly serviceable. The real upside here is that, because you're locked to only one primary, you get to pick your starting stat array for the rest.

I want to spend a minute on the tactical logic for array selection because I think it matters more than most players realize.

The main thing your characteristics do outside of primary attribute progression is **resist potency effects**. Monsters apply debilitating conditions by targeting your attributes against their potency values. The higher your score in a targeted attribute, the more reliably you resist.

**Might** and **Agility** are the two characteristics that do more than just resist potencies:

- **Agility** reduces fall damage by 1 per point of Agility. Falling is extremely common in Draw Steel — you will get pushed off roofs, cliffs, and tree branches constantly.
- **Might** affects a wide variety of small things, including the size of creatures you can grab and how long you can stay flying with the Wings ancestry feature.

So for purely tactical reasons, Might and Agility are slightly higher priority than the mental attributes — and in my experience, Might in particular gets targeted by potencies *a lot*.

For resisting potencies, the key question is: what's the tactical difference between a 2, a 1, a 0, and a negative 1?

At Echelon 1, most monsters have a max characteristic of 2, meaning weak potencies at tier 1, average at tier 2, strong at tier 3. Leaders and solos usually have one higher than that.

- A **2** in a characteristic means you reliably resist potency effects from most monsters (even on tier 3 results), and you still resist tier 2 or lower from leaders and solos.
- A **1** means you reliably resist tier 2 or lower from most monsters, and tier 1 from leaders and solos. Still fairly reliable.
- A **0** only resists tier 1 from most monsters, and nothing from leaders and solos. Basically unreliable.
- A **-1** resists nothing.

The takeaway: **2s and 1s are the big numbers you want to maximize**, even if that means taking a few negatives. The arrays that give you the most 2s and 1s are the ones that provide three of them each. I slightly prefer the array with the 2 in it, because the difference between a 2 and a 1 still matters, whereas the difference between a -1 and a 0 is negligible.

### Stamina Progression

Elementalists get **18 starting Stamina, +6 per level, and 8 recoveries**. This is the standard weak-caster Stamina progression — same as Conduits and Talents. It's a minor negative, but the Earth and Green specializations have strong ways to pump durability, and the class as a whole actively wants to avoid taking damage (because of Persistence), so low Stamina isn't as punishing here as it would be elsewhere.

### Essence as a Heroic Resource

**Essence** is the Elementalist's heroic resource, and it's probably the most controversial part of the class's design.

Elementalists are a Law class: you gain a flat **+2 Essence** at the start of each combat round. As I've said in other videos, I consider this strictly tactically better than the Chaos 1d3 version. Both average to the same value, but predictability is a tactical virtue on its own. So far, Essence is looking great.

The first rider is also excellent: **the first time each combat round that a creature within 10 squares takes damage that isn't untyped or holy, you gain 1 Essence.** Most of your teammates will have typed elemental damage, and you can trigger this yourself via Practical Magic on a maneuver. This is one of the easiest, most reliable riders in the game.

Then we get to the second rider, and you'll notice — it isn't there. Instead of a second rider, the class has **Persistence**, which functions as your second source of HR generation.

### Persistence — The Second Rider That Isn't

Persistence works like this: many of your heroic abilities have a **Persist X** clause. When you persist an ability, at the start of your next turn, you pay X less Essence than you would normally gain — and in exchange, you get to re-trigger all or most of the ability's effect, often for a fraction of its original cost. A 3-essence ability might recast for 1 essence, or a 5-essence ability might recast for 1 or 2.

This is an extraordinary action-economy upgrade. Persistence is the thing that makes the Elementalist a power gamer's dream.

But Persistence comes with drawbacks. The big one: **if you take damage equal to or greater than 5× your Reason score in a single turn, all your persistent abilities end.** At early levels, this is very punishing — 10 damage in a round is trivially achievable by monsters, especially if the Director decides to target you. Your second HR rider can just fail to happen, and it's only partially in your control.

### The Tempo Problem

Let me walk you through why this matters so much.

**Round 1.** No victories, so no starting Essence. At the start of the round, you gain +2 from being a Law class. You use your maneuver — **Practical Magic** — to deal elemental damage to an enemy, triggering your first rider for +1. You now have 3 Essence.

That's the ceiling at Echelon 1 for round 1. Three. For comparison: the Censor's round-1 ceiling is 4, and the Conduit's is 9. The Elementalist is hard-gated on a glacial heroic resource track that you cannot break out of, and it's all because of Persistence.

So on round 1, you use your maneuver and have a main action left. If you want to get Persistence rolling as fast as possible — and you need to, because it's one of your HR riders — you're forced to cast a 3-Essence ability with a persist clause. Let's say **The Flesh As a Crucible**. That spends your 3 Essence, leaves you at 0, and you end your turn.

**Round 2.** Assuming you haven't taken 10+ damage, you persist for -1. You start with 2 Essence instead of 3. Use Practical Magic for +1 (back to 3). Now you can use your persist to recast Flesh As a Crucible for free — a 3-cost spell for 1. That's huge value. But you're still only sitting at 2 Essence afterward.

And that's *only* if you chose to cast a persist ability on round 1. If you didn't — and as we'll see, some of the best 3-cost options don't have persist clauses — you don't even begin utilizing Persistence until round 3 or 4. And in Draw Steel, by round 3 most fights are effectively decided. You're just winding them down.

This is what I mean when I say the Elementalist feels 25% worse than other classes early. You just have fewer Heroic abilities to throw out. And anytime you see a "spend 1 Essence to improve X" rider on an Elementalist ability, you're probably not going to do it, because that 1 Essence is being hoarded to enable Persistence or save toward a 5-cost.

If the MCDM designers are reading — and they probably aren't — my suggestion is simple: **put persist clauses on the Elementalist's signature abilities.** That way you wouldn't need to spend Essence to unlock one of your own HR riders. No other class has to spend HR to *get* HR. It would free up the class enormously without touching the power ceiling.

Enough about Essence. Let's move on.

## Practical Magic

**Practical Magic** is the Elementalist's bespoke maneuver. All Elementalists get it. On a maneuver, you choose one of three effects:

- **Knockback** using your Reason score at range 10. Functionally a magical push. The knockback maneuver isn't spectacular on its own, but being able to apply it at range with Reason is solid.
- **Elemental damage** equal to your Reason score, of any elemental type you choose. Low-value damage for a maneuver on its own, but the flexibility to pick a damage type on the fly lets you exploit damage weaknesses, and it triggers your first HR rider.
- **Teleport** a number of squares equal to your Reason score. Useful for vertical movement, for cleansing grabbed or restrained, or for closing small gaps. You can spend additional Essence to increase the distance, but you will essentially never do this — the cost is bad and you can't afford it.

Each of these options is B-tier in isolation. The real value of Practical Magic is the **flexibility** of being able to pick the right one for the moment. It's better than the sum of its parts, and I personally value flexibility very highly.

## Specializations

Specializations are the Elementalist's version of a subclass. The book lists several, but only four are actually supported: **Earth**, **Fire**, **Green**, and **Void**.

My power ranking:

1. **Void** — strongest, with a meaningful gap to the rest.
2. **Green** — close second.
3. **Earth** — good, but clearly a step down.
4. **Fire** — weakest, and to me the least fun.

Each specialization leans into a tactical role:

- **Void** is a movement-support class, dramatically boosting your team's positioning options. It also has some of the most broken individual features in the game, which we'll get to.
- **Green** is a second support class, providing recoveries and temporary Stamina to boost team durability. It's also a shape-shifting class, which opens up a lot of creative tactical play.
- **Earth** is the most durable Elementalist — lots of Stamina and stability. In theory it leans on wall effects and terrain alteration, but most other specializations can grab those same powers, so mostly what you're buying is the durability.
- **Fire** is the damage-blaster, focused on high single-target and AoE damage. It *does* deal a lot of damage, but I think the numbers are tuned slightly too low compared to what the others bring.

Each specialization gives you an **Acolyte** bonus at level 1 (a minor passive perk). Acolyte of Earth gets stability, Acolyte of Fire gets a damage bonus, Acolyte of the Green gets temporary Stamina, Acolyte of the Void gets increased range. I rank all of these B-tier — they're fine, they're not why you pick the class. The increased range from Acolyte of the Void does combine with the Void's other features to become legitimately powerful, but the rest are forgettable.

## Subclass Triggered Actions

Each specialization gets its own triggered action. I'll cover all four because they're a meaningful differentiator.

**Green — Breath of Dawn Remembered.** Range 10, triggers when self or an ally within range starts their turn or takes damage. The target spends a recovery. You can spend 1 Essence to spend additional recoveries. This is basically a slightly nerfed version of the Conduit's Healing Grace (one of the best maneuvers in the game). It gives you strong burst healing, but because you're so Essence-starved, the "spend 1 Essence for more recoveries" clause hurts to use in practice. Still, the Green Elementalist is a legitimate secondary healer and support class, and this is the backbone of that role.

**Fire — Explosive Assistance.** Range 10 self or ally, triggers when they force-move a creature or object. Increases the distance of that force movement by your Reason score (or 2× Reason for 1 Essence). Force movement is good; more of it is better. But the spammable benefit is mostly just a bit of extra collision damage — not much for a triggered action. Where it really earns its keep is situationally — pushing targets off cliffs, into pits, over edges. Situationally excellent, but for spammability, it's the weakest of the four triggered actions.

**Earth — Skin Like Castle Walls.** Range 10 self or ally, triggers when they take damage. The damage is halved. Spend 1 Essence to also reduce the potency of the effect. A very standard, very solid defensive triggered action. The fact that it's range 10 makes it flexible — you can protect yourself or an ally across the battlefield. Excellent.

**Void — Subtle Relocation.** Range 10 self or ally, triggers when they start their turn, move, or are force-moved. You teleport the target up to Reason squares (or 2× Reason for 1 Essence). This is my personal favorite, and maybe the best of the four in practice. You're giving your allies teleport movement, cleansing (teleport removes grabbed and restrained), and vertical movement. I also interpret falling as "moving," which means you can teleport an ally out of fall damage — your Director may rule differently, but that's how I read it.

## Enchantments and Wards

Elementalists share the standard enchantment options. As with every class, the **bonus Stamina** enchantment (Permanence) is the default click and we won't belabor it. There are some niche builds with Void that benefit from the distance enchantment, but Permanence is the safe pick.

Wards are worth a quick tour:

- **Ward of Delightful Consequences:** 1 surge the first time each round you take damage. Functionally retaliation damage, with flexibility since surges can boost potency. You can deliberately trigger it by provoking opportunity attacks. Decent, though taking damage on an Elementalist is dangerous because of Persistence.
- **Ward of Excellent Protection:** Elemental damage immunity equal to your Reason score. Decent, but boring.
- **Ward of Nature's Affection** and **Ward of Surprising Reactivity** are the two retaliation-movement wards. Both trigger when you take damage from a creature. Nature's Affection slides them equal to your Reason. Surprising Reactivity pushes them 2× Reason. I strongly prefer **Surprising Reactivity** — the doubled value beats the slide-vs-push distinction, and 2× Reason is actually enough to overcome some stability. Nature's Affection's slide is often too low-value to overcome enemy stability. Surprising Reactivity is what I take on most of my builds.

## 1st Level Abilities

### Signature Abilities

You get two signatures: one from your class, one from your kit. As always, I pick one spammable signature for my bread-and-butter and one reactive signature for situational power. The catch with the Elementalist is that they don't have great reactive signatures — but they have some of the best spammable ones in the game.

**Ray of Agonizing Self-Reflection** might be the best signature in the game. It's a range 10 magic strike that deals damage and applies Reason-targeting **slowed**. Slowed on a signature is, to my mind, the best condition you can get on a signature. Dazed and frightened are arguably better conditions overall, but they don't appear on signatures. Slowed reduces enemy movement to 2. Against mostly-melee enemies, you can kite and effectively cancel most of their turn. A signature is supposed to be below average for main actions — it trades heroic resource value for consistency — but Ray of Agonizing Self-Reflection can cancel an entire main action on a fight. That's an absurdly good trade. I spam this constantly.

For fights against mostly ranged or skirmisher enemies where slowed doesn't do much, **Meteoric Introduction** (melee, damage + push 2/3/4) and **Viscous Fire** (ranged fire damage + push 2/3/4) are your alternates. Viscous Fire is generally the better pick — ranged, typed damage, triggers your first HR rider — even though Meteoric Introduction deals slightly more damage. I go Viscous Fire most of the time.

### Heroic Abilities: 3-Essence Options

The 3-cost tier is where the Elementalist's design tension really bites. You're incentivized to pick something with a persist clause to unlock your second HR rider. The two main persist options here are **Behold Mystery** and **The Flesh As a Crucible**.

- **Behold Mystery** is a 3-cube within 10, dealing 2/4/6 psychic damage to each enemy in the area. The fact that this damage doesn't scale with level is frustrating — it becomes much less useful as you climb. But the persist clause lets you recast it as a *maneuver* for 1 Essence. As a 3-cost, it's mediocre; as a 1-cost persist-driven maneuver, it's excellent.
- **The Flesh As a Crucible** is single-target fire damage with a persist that recasts on the same target for 1 Essence (no maneuver downgrade — it's still a main action). Stuck targeting the same enemy, but great for pressuring leaders and solos over a long fight.

But here's the problem — and the ability that makes Persistence even harder to enable:

**Invigorating Growth.** This is an S-tier ability, and possibly one of the best 3-costs in the game. Range 10, one creature, deals poison damage, and applies the following effect: **mushrooms cover the target's body. While they remain, you and an ally adjacent to the target gain 1 surge whenever the target takes damage.** The mushrooms can be removed by the target or an adjacent creature spending a main action.

Let's walk through the math:

1. You cast Invigorating Growth on an enemy.
2. A teammate adjacent to them makes an attack. They gain 1 surge. You gain 1 surge. That's 2 surges per damage instance.
3. At 1st echelon, each surge is 2 extra damage, so 2 surges = 4 bonus damage per instance of damage taken. At 4th echelon, that's 10 bonus damage per instance.
4. Multiple damage instances per turn multiply it further. Attack + maneuver knockback with collision damage = two instances. That's 4 surges (8 bonus damage) at echelon 1, scaling to 20 bonus damage per turn at echelon 4.
5. And that's only if you spend the surges on damage. Other surge uses — especially potency boosts — are arguably more valuable.

There is some controversy over the adjacency wording. Some readers interpret "you and an ally adjacent to the target" as requiring both you *and* the ally to be adjacent. I read it more naturally as "you get a surge, and an ally adjacent to the target also gets a surge." That interpretation is much stronger. Your Director may rule differently — check before you build around it.

The problem: Invigorating Growth has no persist clause. Picking it — and you almost have to — means your round-1 action doesn't enable Persistence, and now you don't get persist rolling until round 3 or 4. This is the exact design tension I was complaining about earlier.

### Heroic Abilities: 5-Essence Options

Another S-tier at this tier: **Instantaneous Excavation**.

On a **maneuver**, you open two 1-square wide, 4-square deep holes anywhere on mundane ground within range 10. You can place them adjacent to each other to create wider openings. Make a power roll against each creature standing over a hole when it opens — on tier 2 or tier 3, they fall in. On tier 1, they shift one square to the edge. That means force-moving them 1 square gets them in the hole — very reliable. Against size-2+ creatures, they're too big to fit, which is the main limitation.

Fall damage at 4 squares deep, against a target with 0 Agility, is 4 damage. Modest on its own. But:

1. **The holes stay on the battle map for the entire encounter.** They become a permanent force-movement multiplier for your whole team. Every push and slide you land near one can dump a target in.
2. **Persist 1** lets you open another hole at the start of your turn. Here's the interpretive question: can you place new holes *on top of* existing ones, stacking them into a deeper hole? The rules specify you can place them next to each other for wider openings, but don't explicitly address stacking. I rule yes at my table — the rules don't forbid it, and the persist specifies "any mundane surface," which an existing hole technically is. Many Directors rule no, reading the explicit wider-opening permission as implicit denial for stacking. Your mileage will vary.

Either way, you can rush the hole deeper over multiple turns, compounding fall damage dramatically. Combine this with a Void Elementalist's features (more on that shortly) and it becomes a legitimate damage nuke engine. You can also cover the hole with a wall ability afterward, forcing buried enemies to use the Claw Dirt maneuver for multiple turns just to dig out. It effectively stun-locks them.

For a persist alternative at 5-cost, **Conflation** is a 3-cube within 10 that deals fire damage, with a persist 2 that lets you recast it as a maneuver. More damage than Behold Mystery, but the persist 2 cost stings. Fine if Instantaneous Excavation isn't your vibe, but it's not close for me.

## 2nd Level

2nd level is where the Elementalist really starts unlocking. The big feature at this level is your **specialization feature**, which the book calls a "feature" but many of these function as full combat abilities.

### Specialization Features

**Disciple of Earth.** +6 Stamina, plus an additional +3 per level past 2nd. By level 10 that's 30 bonus Stamina. Your stability-Stamina durability profile gets absurd. Solid, but Elementalists want to avoid damage anyway, so the value is somewhat blunted.

**Disciple of Fire.** Fire immunity 5 + level. Your fire damage ignores enemy fire immunity. At the start of a combat encounter you gain surges equal to your victories; spending a surge for damage can be fire damage. The fire-immunity-bypass is critical for a Fire specialization — without it, higher-echelon enemies with fire immunity shut you down entirely. So this isn't really a power boost; it's what keeps Fire Elementalists functional. Fine.

**Disciple of the Green.** You can shapeshift into creatures as a maneuver. In animal form, you can speak, use your Reason score for melee free strikes, and gain each form's benefits. Different forms unlock at different levels, so this scales continuously — unlike the mostly-static bonuses on other specializations. Early forms like canine give you +speed, some melee damage, and scent. Later forms give you temp Stamina, flight, grab, and more. You revert to your true form as a maneuver, and you can't enter animal form except from true form. So swapping forms costs two maneuvers — sometimes worth it for a temp Stamina refresh. This is an S-tier feature with massive scaling baked in.

**Void — No Space Between.** I'll just say it: I cannot believe this got past playtesting. This should be a 10th-level feature and they're giving it to the Void Elementalist at level 2.

As a **maneuver** — no heroic resource cost — you open two size-1 portals in unoccupied spaces within range. Each portal must be placed no more than 1 square above the ground. When you or an ally touch a portal, you can choose to be instantly teleported to an unoccupied space adjacent to the other portal. If an enemy is force-moved into a portal, their force movement ends and they emerge from the other portal in a space chosen by the creature who force-moved them. At the start of each of your turns, while the portals are active, you can open an additional portal connected to the network. With 3+ portals, you (or the force-mover) choose the destination.

Let me walk through why this breaks the game:

**Fall damage nuke.** Place one portal anywhere, and the second on top of a +5 pillar (the "1 square above the ground" rule means you can place it at +6). Push an enemy into the first portal with Viscous Fire. They emerge adjacent to the second portal, but you place them one square up — now they're at +7, and they fall. Subtract agility, multiply remaining squares by 2, and you're adding 10–12 damage to your signature. And that's a modest terrain setup. On a map with real cliffs, or with Instantaneous Excavation holes you've been building, the damage scales wildly.

**Kiting.** Place a portal as far from yourself as possible — basically at the edge of the map. Push an enemy into the near portal; they emerge across the battlefield. Now they have to spend their entire turn double-moving just to reach you again. You've functionally cancelled multiple turns. Every turn, you get to place a *new* portal anywhere within range, action-economy free, at the start of your turn. The kiting is inexhaustible.

**Escape and reposition.** Surrounded by enemies? Place a portal between you and your allies, another across the map. You all step through. Monsters cannot follow — they can only use portals when *you* force them through. Your whole team has relocated, and they have to spend the next round chasing.

This feature single-handedly makes the Void Elementalist the strongest specialization in the class. It needs a nerf. Until it gets one, enjoy it.

### Heroic Abilities: 5-Essence Options (2nd Level)

The standout is **Subvert the Green**. Range 10, single-target strike. Green and void keyword. Effect: the target uses their signature ability against a creature of your choice. The signature can target the creature even if it normally wouldn't. You also make a power roll that deals damage to the original target.

This means:

- You deal damage to the target with the ability itself.
- The target deals damage to whoever you pick.
- The target may apply conditions from its signature (to itself, if you direct it that way).

The "can target the creature even if it usually wouldn't" line is the key — it lets you force monsters to target themselves. And there's **no potency check** on Subvert the Green. It just lands. You can hit a solo at echelon 1 with this and make it smash itself with its own signature.

The scaling here is implicit: the stronger the monster you cast it on, the more damage its signature does, and the more potent the conditions. You're not directly building around Subvert the Green, which keeps it out of S-tier for me, but it's borderline — extremely efficient, very reliable, and creatively flexible.

The other 5-costs are less exciting. **Translated Through Flame** teleports an ally at range 10 and deals damage to adjacent enemies at the destination. The damage is mediocre, but range-10 ally teleport has situational value. It's a serviceable second pick; Subvert the Green is the default.

## 3rd Level

I'm going to be honest — 3rd level is underwhelming for Elementalists. The specialization features at this level are mostly out-of-combat, and the 7-essence options are unimpressive.

- **Maw of Earth** (B-tier) is a 3-cube within 10 that deals initial damage and drops the ground 3 squares, adding fall damage with no save. It's decent terrain manipulation, but 7 essence for no persist clause is too expensive at this echelon. If they'd put a persist on it — letting you recast as a 3-cube variant of Instantaneous Excavation — it would be incredible. Sadly, they didn't.
- **Swarm of Spirits** is a 3-aura with persist 1. It deals corruption damage to enemies and grants allies in the aura +1 to saves and +1 to all characteristic scores for resisting potencies. The potency buff is reliable and plannable, which I value. The persist 1 keeps the aura active all fight. Not exciting, but the most reliable pick at 7 cost if you want a persist option.

Everything else at this level is, to me, a nothing-burger — they just don't do enough to justify 7 essence on a class this Essence-starved.

Moving on.

## 4th–6th Level (Echelon 2)

### 4th Level

Beginning of Echelon 2. Usual increases: characteristics go up, a perk, more skills. The key features:

**Font of Essence.** The first time each combat round a creature within 10 squares takes damage that isn't untyped or holy, you gain 2 Essence instead of 1. A +1 to our existing rider, self-triggerable via Practical Magic. This brings the round-1 ceiling from 3 to 4, which is meaningful — not transformative, but meaningful.

**Mantle of Essence.** While you have 3+ Essence and aren't dying, you exude an aura with distance equal to your Reason score. At this level that's a 3-aura, scaling up. The aura effect depends on your specialization:

- **Burning Grounds (Fire):** Each enemy in the area takes fire damage equal to your Reason each turn. Solid, straightforward.
- **Flowering Bed (Green):** Each ally in the area gains temporary Stamina equal to your Reason. Roughly equivalent to Burning Grounds in value — defense is usually weaker than offense, but in Draw Steel, defense helps you accumulate more victories per respite, which is very valuable.
- **Quaking Earth (Earth):** At the end of each of your turns, push each enemy in the area up to Reason squares. Fun in theory, but the push value is low and stability usually overcomes it. Rarely as flashy as it sounds.
- **Veiling Bed (Void):** The area provides concealment for you and your allies. Concealment imposes banes on strikes and enables hide tactics. There are builds across the game that benefit enormously from reliable concealment, and this gives you a mobile source.

I rank Burning Grounds and Veiling Bed as the strongest picks at A-tier.

### 5th Level

Specialization features and your first 9-essence ability.

**Pierce the Veil of Substance (Void).** Mundane barriers 1 square thick or less don't block your senses or line of effect (one barrier at a time). You can build walls for line-of-effect denial and still see through them yourself. It's tricky to exploit, but I feel like there's serious potential I haven't fully unlocked. Intriguing but situational.

**Hide of Tenfold Shields (Green).** I love this feature. Whenever you change into an animal form, you gain temporary Stamina equal to your level, added on top of any temp Stamina the form already provides. And — this is the fun part — an adjacent ally can use a maneuver to **pet you**, transferring your temp Stamina to them.

Combine this with a Talent on your team who has the 2nd-level feature granting extra maneuvers, and the combo gets silly. Maneuver to revert to human form, maneuver to re-enter animal form (refreshing temp Stamina), teammate pets you to transfer it. The stacking gets hilarious, and the durability output is genuinely strong. I love this ability.

**The Mountain Does Not Move (Earth).** Your stability increases by your level. When an ally within distance of your Hurl Element ability is force-moved, you can use a free triggered action to decrease your own stability down to 0 and increase the ally's stability by the same amount — cancelling force movement made against them. This turns your stability into a communal resource. Being pushed off cliffs or into kill zones is one of the most devastating things that happens in Draw Steel combat, and the Earth Elementalist just neutralizes it for the whole party. Powerful.

Now to the 9-essence abilities. Two pick-worthy options:

**Combustion Deferred.** Range 10, one creature or object. Decent fire damage (maybe not quite enough for 9 essence on its own). When the target ends their next turn — or drops to 0 Stamina before then — each enemy adjacent takes fire damage equal to 2× your Reason, and each affected enemy gains the same effect. It's a chain reaction. Kill the target or push them into a crowd and the damage spreads. Rewards tactical play and creative positioning — my favorite kind of ability.

**Web of All That Comes Before.** A 4-cube within 10. Corruption damage (minor), plus Agility-targeting restrained (save ends). Effect: the area is difficult terrain until the start of your next turn. Each enemy who ends their turn in the area is restrained. Persist 1 keeps the area going.

This is the ability that makes No Space Between's kiting strategy nasty. You've portaled enemies across the map; they're sprinting back toward you. Drop Web of All That Comes Before at the choke point. They stop, they're restrained, save ends. Even if they eventually save, you portal them back. The value-lock from this + No Space Between is enormous.

### 6th Level

**Weirding.** You can spend 10 uninterrupted minutes to create a freeform magic effect. Choose from a list: create a mundane object of size ≤ Reason, construct a shelter for 20 creatures for 24 hours undetectable to enemies, restore Stamina to an object, fill an area with a natural phenomenon, preserve or rot a corpse, create a one-way scrying seal, etc.

All of these are out-of-combat at 6th level, so I won't dwell on them individually. But tag them mentally — **Grand Weirding** at 9th level turns this into a combat ability, and the interpretive questions get weird fast.

For 9-essence abilities, two solid options:

**Meteor.** Range 10, one creature. Void and fire keywords. Teleport the target 4 squares (tier 1), +2 per tier above. If teleported into a space where they would fall, they do so — treating agility as 0 for the fall. Target takes fire fall damage; each enemy within 3 squares of the landing also takes the same fire damage. The ground in 3 squares becomes difficult terrain.

The "agility counts as 0" clause is incredible — it lets you negate one of the defenses against fall damage entirely. At tier 2, that's 6 squares of teleport → 12 fall damage → AoE'd across a 3-square area. On flat ground, that's roughly what 9 essence should buy. On terrain you've been shaping — Instantaneous Excavation holes, No Space Between portal networks, natural cliffs — this becomes a nuke. In practice, it's hard to set up those conditions before the fight is decided, so Meteor tends to be less efficient than it looks on paper, but the ceiling is high.

**Magma Titan.** Ally buff with several effects: the target's size increases, they gain fire immunity 10, their strikes deal extra fire damage equal to 2× Reason, force movement distance gains +2, and they can use their highest characteristic in place of Might for Might power rolls. Persist 1 keeps it active and lets the target spend 2 recoveries at the start of each of your turns. Size increase enables grab strategies you otherwise couldn't pull off. Decent, but I'm not sure the sum of buffs fully justifies 9 essence. Usable if you have the right ally to buff.

## 7th–9th Level (Echelon 3)

### 7th Level

Echelon 3 bonuses, plus:

**Surging Essence.** You gain 3 Essence at the start of each turn instead of 2. Not only more Essence, but crucially, more headroom to persist multiple abilities. You could now persist a persist 2 and a persist 1, or three persist 1s, without going into the negative.

**Mantle of Quintessence.** Your Mantle of Essence no longer requires you to have 3+ Essence to function. Thank goodness. This is the change that finally makes the Mantle feel like a real feature — at 4th level, the Essence gate meant you often couldn't afford to run it. Now it's always on.

Nothing else tactical at this level. Moving on.

### 8th Level

More specialization features, plus an 11-essence ability.

**Black Hole Star (Void).** At the end of each of your turns, you target one creature or object within distance of your Hurl Element ability and vertical-pull it up to 5 squares. If stability reduces the movement, pull is a minimum of 2. This force movement ignores stability for you and your allies. Additionally, your Mantle of Essence now reduces the stability of enemies and objects within the aura by an amount equal to your level.

Pulling targets into portals is already a Void staple, and now you get to do it for free every turn, ignoring stability. The vertical pull sets up fall damage. The aura stability reduction lets your team bypass stability on force moves. This is an enormous feature for a specialization that was already the best in the class.

**Chimeric Manifestation (Green).** You can enter or exit animal form as a free maneuver the first time you use Disciple of the Green each turn. That means you can swap forms every turn and refresh temp Stamina constantly — deceptively strong durability. Additionally, you can select a second animal form and combine them: you gain the positive benefits from both (though I've always interpreted this as benefits, not effects — if your Director reads it as effects, it becomes *much* stronger). You can only combine forms whose levels total ≤ 12.

**The Flame Primordial (Fire).** Whenever you deal fire damage, add 1d6 extra fire damage. When you deal fire damage to a mundane object you can use a free triggered action to melt it via Return of Formulus. Enemies who start their turn adjacent to you have fire weakness equal to your Reason (2× Reason if metal) until the start of your next turn. This is the level where Fire Elementalists start dealing serious damage. Strong feature.

**Summon Source of Earth (Earth).** As a main action, summon a Source of Earth — essentially an earth elemental with stats. It has a Tunneler ability: whenever it burrows, it creates a size-2 tunnel, with 6 speed. So you can just dig holes straight down every round. It becomes a better Instantaneous Excavation, basically. Earth Elementalists also get Earth Accepts Me, which lets them meld into the source — helpful for avoiding damage and protecting Persistence.

The summon normally only lasts a short time, but **persist 2** extends it another turn at the start of your next turn. You can keep it up the entire fight. And because Summon Source of Earth doesn't cost HR to initially cast, the persist is effectively giving you a free persistent effect on something that didn't cost HR up front — it unlocks one of your HR riders without requiring you to spend to get there. This is exactly the design fix I was begging for earlier, except only Earth Elementalists get it. S-tier feature.

**Return to Oblivion (11 Essence).** Create a size-1 large vortex lasting until the end of the encounter. At the start of each combat round, while the vortex is unoccupied, it pulls enemies within 5 squares toward it for 3 squares. Enemies who enter or start their turn in the vortex fall prone. At the end of the round, a winded enemy who is not a leader or solo in the vortex is instantly destroyed.

Combine this with No Space Between and you have an execution engine. Create a portal adjacent to the vortex, push a winded enemy through the portal, they emerge adjacent to the vortex, the pull drops them in, they die at end of round. For 11 essence you get a pull-and-execute zone for the entire encounter. Excellent value.

### 9th Level

**Grand Weirding.** You can now use the Weirding feature as a main action. Also, with 5+ victories, choose one damage type (acid, cold, corruption, fire, lightning, poison, or sonic) — you gain full immunity to it. The damage immunity is obviously excellent.

The "use Weirding as a main action" clause is where things get strange. I interpret this as "the 10-uninterrupted-minutes requirement is replaced by a main action," meaning you can now use Weirding in combat. But what does it mean to do these effects in combat? What does it mean to "construct a shelter for 20 creatures that lasts 24 hours and can't be detected by enemies"? How big is the shelter? Does it block line of effect? Can you push creatures into it? Does it make you untargetable? The text doesn't say. Creating a mundane object of size Reason as a main action? Sure, that works — though not a great rate for a main action. Filling an area with fire? How much damage does that deal?

I don't know. It feels like this was rushed through. Your mileage will vary enormously based on your Director's rulings.

**Prism (11 Essence).** You use up to three heroic abilities whose total essence cost is ≤ 11, spending no additional essence beyond each ability's cost. You can shift up to 2 squares between uses.

This is the Elementalist version of Time Stop from Baldur's Gate 2. You chain multiple spells in one turn before anyone else gets to respond. Combinations: two 5-costs (like back-to-back Instantaneous Excavations), two 3-costs + a 5-cost, three 3-costs. If you use persist abilities with Prism, you can rapidly stack multiple persist effects simultaneously. The creative potential is enormous and depends entirely on your build. This is the only 9th-level 11-cost I'd genuinely consider — the rest are minor.

## 10th Level

Max level, plus your Echelon 4 feature.

**Essence Generation.** You gain 4 Essence at the start of each turn instead of 3. A straight +1, but deceptively better because it lets you persist up to 4 abilities simultaneously. Combined with Font of Essence and your rider, you finally have room to actually run your full engine.

**Breath.** Your victory-to-XP conversion is replaced by Breath. You can spend any number of Breath points to gain Essence — **1 Breath becomes 3 Essence**. This is a massive tempo hack. All of the Essence problems that have plagued this class for 10 levels? They just melt away after your first respite with meaningful victories. You can finally cast the spells you've been locked out of your entire career.

Breath is amazing. One of the best level-10 XP-replacement features in the game. I don't want to make a final claim until I've gone through every class, but for a class that's been starved the entire way up, suddenly getting this steroid is transformative.

**One Specialization Feature.** You get one feature for each specialization. All of them are good; I'll just highlight the green option since it's the strongest.

**Master of the Green.** +2 recoveries. At each respite, grant each ally who respited with you +2 additional recoveries (they lose them at the end of their next respite, so no stacking). Also, as a respite activity, you perform a ritual that grows a fruit tree producing 1d6 **Life Fruit**. A creature can consume a Life Fruit as a maneuver, or feed one to an adjacent willing creature. A consumed Life Fruit restores **all Stamina**, ends **all conditions and effects**, and lets them **stand up if prone**. No saving throw. Maneuver cost only.

Between Breath and Master of the Green, you are completely unlocked at 10th level. I just wish you got these things before 10th level.

## Closing Thoughts

That's the Elementalist in full. A slow-ramping area-control powerhouse that starts every combat feeling behind, grinds through 2–3 rounds to enable Persistence, then snowballs into one of the most powerful classes in the game by round 4. A power gamer's dream — because Persistence offers more tempo value than almost any mechanic in the game — and a power gamer's nightmare, because the first few rounds of every fight you're watching the rest of your party do cooler things than you.

The class has a clear power curve: a frustrating Echelon 1 where you feel about 25% worse than other classes, a huge power spike at 2nd level (especially for Void, thanks to No Space Between), some rough spots at 3rd and 6th, and an extraordinary payoff at 10th level where Breath and Master of the Green finally uncork the HR problems.

This class has more S-ranked abilities on my spreadsheet than any class I've covered so far: **Prism**, **Summon Source of Earth**, **Disciple of the Green**, **Invigorating Growth**, **Instantaneous Excavation**, and — borderline — **Ray of Agonizing Self-Reflection**. It's a fantastic class, and it's my favorite class in the game.

My recommendation: **Void** specialization. Build around **No Space Between**, **Instantaneous Excavation**, and **Invigorating Growth**. Take **Ray of Agonizing Self-Reflection** and **Viscous Fire** for signatures, **Ward of Surprising Reactivity** for your ward. Enjoy the glacial ramp, and by Echelon 2 you'll be doing things no other class in the game can do.

---

*Licensed under CC BY-NC-SA 4.0*
