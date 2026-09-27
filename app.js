const baseExercises = [
['oberer Rücken','abgespreiztes Kurzhantelziehen','Kurzhantel'],['oberer Rücken','Weit-Arm-Bandziehen / Face Pulls','Band'],['oberer Rücken','Band weit-Arm-ziehen','Band'],['Rücken','Klimmzüge','Körpergewicht'],['mittlerer Rücken','Band-Rudern','Band'],['Brust','Kurzhantelbankdrücken','Kurzhantel + Bank'],['obere Brust','Kurzhantel-Schrägbankdrücken','Kurzhantel + Bank'],['untere Brust','Kurzhantel-Schrägbodendrücken','Kurzhantel'],['Bauch','Crunches + Seitcrunches','Körpergewicht'],['Bauch','Crunches am Band + Hüftrotation','Band'],['Bauch','Bein hochziehen + Hüftrotation','Körpergewicht'],['Schultern','Kurzhantel-Schulterdrücken','Kurzhantel'],['seitliche Schultern','Kurzhantel-Seitheben (2 s)','Kurzhantel'],['seitliche Schultern','Band-Reverse-Ziehen','Band'],['hintere Schultern','Kurzhantel Reverse Butterfly','Kurzhantel'],['vordere Schulter','Kurzhantel Frontheben','Kurzhantel'],['Schultern','Handstand-Push-ups','Körpergewicht'],['Beine','Kurzhantel-Kreuzheben','Kurzhantel'],['Beine','Bulgarian Split Squats','Kurzhantel + Bank'],['Waden','Wadenheben an der Bank','Kurzhantel + Bank'],['Oberschenkel','Bank-Drücken (Keller)','Bank'],['Po','Über-Kreuz-Gehen','Band'],['Po','Hip Thrusts einbeinig','Bank'],['Po','Hanteleseltritte','Kurzhantel'],['Bizeps','Kurzhantel-Hammercurls','Kurzhantel'],['Bizeps','Bizepscurls auf Schrägbank','Kurzhantel + Bank'],['Unterarmbeuger','Kurzhantel Curls','Kurzhantel'],['Unterarmbeuger','Band Curls','Band'],['Unterarmstrecker','Kurzhantel Reverse Curls','Kurzhantel'],['Unterarmstrecker','Band Reverse Curls','Band'],['Unterarm','Handquetscher','Handtrainer'],['Trizeps','Kurzhantel über Kopf','Kurzhantel'],['Brust','Liegestütze','Körpergewicht']
].map((x,i)=>({id:'e'+i,group:x[0],name:x[1],equipment:x[2],target:'3 × 8–12',load:'',active:true,history:[]}));
const todayNames = new Set(['abgespreiztes Kurzhantelziehen','Band weit-Arm-ziehen','Kurzhantel-Schrägbodendrücken','Crunches + Seitcrunches','Kurzhantel-Seitheben (2 s)','Kurzhantel Frontheben','Kurzhantel-Kreuzheben','Wadenheben an der Bank','Über-Kreuz-Gehen','Hanteleseltritte','Kurzhantel Curls','Band Curls','Kurzhantel Reverse Curls','Band Reverse Curls','Kurzhantel über Kopf']);
const skills = [
{name:'Pistol Squat',icon:'🦵',family:'Beine',boss:'Der Einbeinige',steps:['15 saubere Squats','Split Squat 10/Seite','Box Pistol','Pistol mit Unterstützung','Negativ-Pistol','Freier Pistol Squat'],metric:'Wdh.'},
{name:'L-Sit',icon:'🪑',family:'Core',boss:'Der Kompressor',steps:['Stütz halten','Knie anheben','Tuck Sit','Ein Bein strecken','Beide Beine teilweise','Voller L-Sit'],metric:'Sek.'},
{name:'Handstand',icon:'🤸',family:'Balance',boss:'Die verkehrte Welt',steps:['Wrist Prep + Pike Hold','Wall Walk','Bauch-zur-Wand-Hold','Kick-up an Wand','Freier Hold 5 s','Freier Hold 30 s'],metric:'Sek.'},
{name:'Handstand Push-up',icon:'⬆️',family:'Push',boss:'Der Turm',steps:['Pike Push-up','Erhöhte Pike Push-up','Negativer Wall HSPU','Wall HSPU','Deficit Wall HSPU','Freier HSPU'],metric:'Wdh.'},
{name:'Muscle-up',icon:'🚀',family:'Pull',boss:'Der Türsteher',steps:['8 Pull-ups','Chest-to-Bar','Explosive Pull-ups','Straight-Bar-Dip','Band Muscle-up','Strict Muscle-up'],metric:'Wdh.'},
{name:'Front Lever',icon:'🦇',family:'Pull',boss:'Der Abgrund',steps:['Active Hang','Tuck Lever','Advanced Tuck','Single Leg','Straddle','Full Front Lever'],metric:'Sek.'},
{name:'Back Lever',icon:'🌒',family:'Pull',boss:'Die Rückseite',steps:['German Hang','Skin the Cat','Tuck Back Lever','Advanced Tuck','Straddle','Full Back Lever'],metric:'Sek.'},
{name:'Planche',icon:'🛸',family:'Push',boss:'Der Tempel',steps:['Planche Lean','Frog Stand','Tuck Planche','Advanced Tuck','Straddle Planche','Full Planche'],metric:'Sek.'},
{name:'Human Flag',icon:'🚩',family:'Side/Core',boss:'Der Fahnenträger',steps:['Side Plank','Vertical Flag Hold','Tuck Flag','One-Leg Flag','Straddle Flag','Full Human Flag'],metric:'Sek.'},
{name:'Dragon Flag',icon:'🐉',family:'Core',boss:'Der Drache',steps:['Hollow Hold','Leg Raises','Negative Dragon Flag','Tuck Dragon Flag','One-Leg Dragon','Full Dragon Flag'],metric:'Wdh.'},
{name:'One-Arm Pull-up',icon:'🦍',family:'Pull',boss:'Der Titan',steps:['10 Pull-ups','Archer Pull-up','Typewriter Pull-up','Assisted One-Arm','Negative One-Arm','One-Arm Pull-up'],metric:'Wdh.'},
{name:'V-Sit',icon:'✌️',family:'Core',boss:'Der Winkel',steps:['Tuck Sit','L-Sit 15 s','L-Sit 30 s','High L-Sit','Tuck V-Sit','V-Sit'],metric:'Sek.'},
{name:'Press to Handstand',icon:'🔺',family:'Balance',boss:'Der Aufstieg',steps:['Pike Compression','Frog Stand','Straddle Compression','Box Press Drill','Negative Press','Press Handstand'],metric:'Wdh.'},
{name:'90° Hold',icon:'📐',family:'Push',boss:'Der rechte Winkel',steps:['Push-up Hold','Pseudo Planche Push-up','Bent-Arm Stand','Negative 90°','Assisted 90°','90° Hold'],metric:'Sek.'},
{name:'Shrimp Squat',icon:'🦐',family:'Beine',boss:'Die Garnele',steps:['Split Squat','Reverse Lunge','Assisted Shrimp','Partial Shrimp','Full Shrimp','Weighted Shrimp'],metric:'Wdh.'},
{name:'Dragon Squat',icon:'🐲',family:'Beine',boss:'Der Knoten',steps:['Cossack Squat','Curtsy Lunge','Assisted Dragon','Partial Dragon','Full Dragon','Weighted Dragon'],metric:'Wdh.'},
{name:'Handstand Walk',icon:'🚶',family:'Balance',boss:'Der Spaziergang',steps:['Wall Handstand 30 s','Shoulder Taps','Wall Walk-offs','2 freie Schritte','5 freie Schritte','10 m Handstand Walk'],metric:'Meter'},
{name:'One-Arm Handstand',icon:'☝️',family:'Balance',boss:'Der Monolith',steps:['Handstand 45 s','Weight Shifts','Finger-Assisted Hold','One-Hand Wall Hold','2 s One-Arm','10 s One-Arm'],metric:'Sek.'}
].map((s,i)=>({...s,id:'s'+i}));

const skillPlans = {
'L-Sit':{source:'https://www.youtube.com/results?search_query=L-Sit+progression+calisthenics+tutorial',visual:skills.find(x=>x.name==='L-Sit')?.icon||'🎯',intro:'Stützkraft, Kompression und Core-Spannung.',gate:'3 × 20 s sauber',drills:[{name:'Stütz halten auf Bank',dose:'3 × 20 s',cue:'Schultern aktiv nach unten drücken, Ellbogen gestreckt.',error:'Einsinken in die Schultern; gebeugte Arme.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Stütz halten auf Bank calisthenics tutorial')},{name:'Sitzende Kniehebe-Kompression',dose:'3 × 12',cue:'Aufrecht sitzen und Knie aktiv zur Brust ziehen.',error:'Zurücklehnen und Schwung holen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Sitzende Kniehebe-Kompression calisthenics tutorial')},{name:'Tuck L-Sit',dose:'3 × 15 s',cue:'Knie zur Brust, Hüfte zwischen den Händen.',error:'Füße absetzen; Schultern hochziehen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Tuck L-Sit calisthenics tutorial')}]},
'Handstand':{source:'https://www.youtube.com/results?search_query=handstand+progression+beginner+calisthenics+tutorial',visual:skills.find(x=>x.name==='Handstand')?.icon||'🎯',intro:'Handgelenke, Schulterlinie, Wandkontrolle und Balance.',gate:'3 × 30 s Bauch-zur-Wand',drills:[{name:'Handgelenk-Prep',dose:'3 Min',cue:'Finger spreizen, Belastung langsam steigern.',error:'Kalt direkt in maximale Belastung.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Handgelenk-Prep calisthenics tutorial')},{name:'Bauch-zur-Wand-Handstand',dose:'3 × 30 s',cue:'Rippen einziehen, Po anspannen, aktiv aus Schultern drücken.',error:'Hohlkreuz; Kopf stark herausstrecken.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Bauch-zur-Wand-Handstand calisthenics tutorial')},{name:'Wall Floats',dose:'5 × 10 s',cue:'Füße kurz lösen und über Finger balancieren.',error:'Von der Wand abspringen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Wall Floats calisthenics tutorial')}]},
'Pistol Squat':{source:'https://www.youtube.com/results?search_query=pistol+squat+progression+beginner+tutorial',visual:skills.find(x=>x.name==='Pistol Squat')?.icon||'🎯',intro:'Einbeinige Kraft, Balance und Sprunggelenksbeweglichkeit.',gate:'3 × 8 Box Pistols je Seite',drills:[{name:'Split Squat',dose:'3 × 10 je Seite',cue:'Vorderes Knie kontrolliert, voller Fuß belastet.',error:'Knie kollabiert nach innen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Split Squat calisthenics tutorial')},{name:'Box Pistol',dose:'3 × 8 je Seite',cue:'Langsam auf Bank setzen, ohne fallen zu lassen.',error:'Auf die Bank plumpsen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Box Pistol calisthenics tutorial')},{name:'Assisted Pistol',dose:'3 × 6 je Seite',cue:'Nur so viel Hilfe wie nötig.',error:'Mit den Armen hochziehen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Assisted Pistol calisthenics tutorial')}]},
'Handstand Push-up':{source:'https://www.youtube.com/results?search_query=handstand+push+up+progression+calisthenics',visual:skills.find(x=>x.name==='Handstand Push-up')?.icon||'🎯',intro:'Vertikale Druckkraft plus sichere Handstandposition.',gate:'3 × 8 erhöhte Pike Push-ups',drills:[{name:'Pike Push-up',dose:'3 × 10',cue:'Kopf vor den Händen absenken, Hüfte hoch.',error:'Wie normalen Push-up ausführen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Pike Push-up calisthenics tutorial')},{name:'Erhöhte Pike Push-up',dose:'3 × 8',cue:'Füße erhöht, kontrollierte Tiefe.',error:'Hohlkreuz und halbe Wiederholungen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Erhöhte Pike Push-up calisthenics tutorial')},{name:'Negative Wall HSPU',dose:'4 × 3',cue:'3–5 Sekunden kontrolliert ablassen.',error:'Nach unten fallen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Negative Wall HSPU calisthenics tutorial')}]},
'Muscle-up':{source:'https://www.youtube.com/results?search_query=muscle+up+progression+FitnessFAQs+tutorial',visual:skills.find(x=>x.name==='Muscle-up')?.icon||'🎯',intro:'Hoher explosiver Zug, Übergang und Straight-Bar-Dip.',gate:'8 hohe Pull-ups + 10 Straight-Bar-Dips sauber',drills:[{name:'Chest-to-Bar Pull-up',dose:'4 × 6–8',cue:'Brust aktiv zur Stange ziehen.',error:'Nur Kinn über Stange.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Chest-to-Bar Pull-up calisthenics tutorial')},{name:'Explosive High Pull',dose:'5 × 3–5',cue:'Schnell und hoch Richtung untere Brust ziehen.',error:'Kipping statt Zugkraft.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Explosive High Pull calisthenics tutorial')},{name:'Straight-Bar Dip',dose:'4 × 8–12',cue:'Oben stabil, kontrolliert tief drücken.',error:'Schultern nach vorn kollabieren.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Straight-Bar Dip calisthenics tutorial')}]},
'Front Lever':{source:'https://www.youtube.com/results?search_query=front+lever+progression+calisthenics+tutorial',visual:skills.find(x=>x.name==='Front Lever')?.icon||'🎯',intro:'Straight-arm Zugkraft, Schulterblattkontrolle und Hollow-Spannung.',gate:'4 × 10 s Tuck Front Lever',drills:[{name:'Active Hang',dose:'3 × 20 s',cue:'Schulterblätter aktiv nach unten ziehen.',error:'Passiv in Schultern hängen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Active Hang calisthenics tutorial')},{name:'Tuck Front Lever',dose:'4 × 10 s',cue:'Hüfte hoch, Rücken möglichst parallel.',error:'Hüfte absinken lassen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Tuck Front Lever calisthenics tutorial')},{name:'Tuck Lever Rows',dose:'3 × 6',cue:'Körperposition halten und kontrolliert ziehen.',error:'Position bei jeder Wiederholung verlieren.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Tuck Lever Rows calisthenics tutorial')}]},
'Back Lever':{source:'https://www.youtube.com/results?search_query=back+lever+progression+calisthenics+tutorial',visual:skills.find(x=>x.name==='Back Lever')?.icon||'🎯',intro:'Schulterextension, Straight-arm-Kraft und Körperspannung.',gate:'4 × 10 s Tuck Back Lever',drills:[{name:'German Hang',dose:'3 × 20 s',cue:'Nur schmerzfreie Schulterposition.',error:'In Schulterdehnung hineinzwingen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('German Hang calisthenics tutorial')},{name:'Skin the Cat',dose:'3 × 5',cue:'Langsam und kontrolliert rotieren.',error:'Schwung benutzen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Skin the Cat calisthenics tutorial')},{name:'Tuck Back Lever',dose:'4 × 10 s',cue:'Arme gestreckt, Hüfte stabil.',error:'Ellbogen beugen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Tuck Back Lever calisthenics tutorial')}]},
'Planche':{source:'https://www.youtube.com/results?search_query=planche+progression+beginner+calisthenics+tutorial',visual:skills.find(x=>x.name==='Planche')?.icon||'🎯',intro:'Handgelenke, Protraktion und Straight-arm-Druckkraft.',gate:'4 × 20 s starker Planche Lean',drills:[{name:'Planche Lean',dose:'4 × 20 s',cue:'Schultern vor Hände, Schulterblätter aktiv auseinander.',error:'Ellbogen beugen; Hüfte hängen lassen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Planche Lean calisthenics tutorial')},{name:'Frog Stand',dose:'4 × 20 s',cue:'Gewicht langsam nach vorn verlagern.',error:'Nach vorn springen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Frog Stand calisthenics tutorial')},{name:'Pseudo Planche Push-up',dose:'3 × 8',cue:'Vorlage während der Wiederholung halten.',error:'Zur normalen Push-up-Position zurückweichen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Pseudo Planche Push-up calisthenics tutorial')}]},
'Human Flag':{source:'https://www.youtube.com/results?search_query=human+flag+progression+calisthenics+tutorial',visual:skills.find(x=>x.name==='Human Flag')?.icon||'🎯',intro:'Seitliche Core-Kraft, Schulterstabilität und Push-Pull-Koordination.',gate:'4 × 10 s Tuck Flag',drills:[{name:'Side Plank',dose:'3 × 45 s je Seite',cue:'Körper in einer Linie halten.',error:'Hüfte absinken lassen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Side Plank calisthenics tutorial')},{name:'Vertical Flag Hold',dose:'4 × 15 s',cue:'Oberer Arm zieht, unterer drückt.',error:'Beide Arme nur ziehen lassen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Vertical Flag Hold calisthenics tutorial')},{name:'Tuck Flag',dose:'4 × 10 s',cue:'Knie kompakt, Hüfte hoch.',error:'Schulterposition verlieren.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Tuck Flag calisthenics tutorial')}]},
'Dragon Flag':{source:'https://www.youtube.com/results?search_query=dragon+flag+progression+tutorial',visual:skills.find(x=>x.name==='Dragon Flag')?.icon||'🎯',intro:'Anti-Extension-Core und kontrollierte Ganzkörperspannung.',gate:'3 × 5 kontrollierte Negative',drills:[{name:'Hollow Body Hold',dose:'3 × 30 s',cue:'Lendenwirbelsäule am Boden.',error:'Hohlkreuz.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Hollow Body Hold calisthenics tutorial')},{name:'Hanging Leg Raise',dose:'3 × 10',cue:'Becken aktiv einrollen.',error:'Nur aus Hüfte schwingen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Hanging Leg Raise calisthenics tutorial')},{name:'Dragon Flag Negative',dose:'3 × 5',cue:'Körper als Einheit langsam ablassen.',error:'In Hüfte einknicken.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Dragon Flag Negative calisthenics tutorial')}]},
'One-Arm Pull-up':{source:'https://www.youtube.com/results?search_query=one+arm+pull+up+progression+FitnessFAQs',visual:skills.find(x=>x.name==='One-Arm Pull-up')?.icon||'🎯',intro:'Sehr hohe einarmige Zugkraft und Schulterblattkontrolle.',gate:'3 × 5 Archer Pull-ups je Seite',drills:[{name:'Archer Pull-up',dose:'3 × 5 je Seite',cue:'Zur Arbeitsseite ziehen, Gegenarm lang.',error:'Körper stark verdrehen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Archer Pull-up calisthenics tutorial')},{name:'Assisted One-Arm Pull-up',dose:'4 × 4 je Seite',cue:'Hilfshand nur minimal einsetzen.',error:'Mit Hilfshand Hauptarbeit leisten.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Assisted One-Arm Pull-up calisthenics tutorial')},{name:'One-Arm Negative',dose:'4 × 3 je Seite',cue:'5 Sekunden kontrolliert ablassen.',error:'Unkontrolliert fallen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('One-Arm Negative calisthenics tutorial')}]},
'V-Sit':{source:'https://www.youtube.com/results?search_query=V-sit+progression+calisthenics+tutorial',visual:skills.find(x=>x.name==='V-Sit')?.icon||'🎯',intro:'L-Sit-Basis plus deutlich stärkere aktive Kompression.',gate:'3 × 20 s L-Sit + 3 × 10 Compression Lifts',drills:[{name:'L-Sit',dose:'3 × 20 s',cue:'Knie gestreckt, Schultern tief.',error:'Rund werden und einsinken.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('L-Sit calisthenics tutorial')},{name:'Pike Compression Lift',dose:'3 × 10',cue:'Beine aktiv vom Boden heben.',error:'Nach hinten lehnen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Pike Compression Lift calisthenics tutorial')},{name:'High L-Sit',dose:'4 × 10 s',cue:'Hüfte aktiv nach vorn/oben drücken.',error:'Nur Füße hochziehen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('High L-Sit calisthenics tutorial')}]},
'Press to Handstand':{source:'https://www.youtube.com/results?search_query=press+to+handstand+progression+tutorial',visual:skills.find(x=>x.name==='Press to Handstand')?.icon||'🎯',intro:'Kompression, Schultervorlage und kontrollierter Gewichtstransfer.',gate:'3 × 5 Box Press Drills sauber',drills:[{name:'Pike Compression',dose:'3 × 10',cue:'Beine aktiv anheben.',error:'Nur Oberkörper beugen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Pike Compression calisthenics tutorial')},{name:'Box Press Drill',dose:'4 × 5',cue:'Hüfte über Schultern bringen.',error:'Abspringen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Box Press Drill calisthenics tutorial')},{name:'Negative Press',dose:'4 × 3',cue:'Aus Handstand langsam kontrolliert absenken.',error:'Fallen lassen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Negative Press calisthenics tutorial')}]},
'90° Hold':{source:'https://www.youtube.com/results?search_query=90+degree+hold+calisthenics+progression',visual:skills.find(x=>x.name==='90° Hold')?.icon||'🎯',intro:'Bent-arm-Kraft, Planche-Vorlage und Core-Spannung.',gate:'4 × 5 s Assisted 90° Hold',drills:[{name:'Pseudo Planche Push-up',dose:'3 × 8',cue:'Vorlage halten.',error:'Schultern hinter Hände.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Pseudo Planche Push-up calisthenics tutorial')},{name:'Bent-Arm Stand',dose:'4 × 10 s',cue:'Ellbogen stabil, Körper kompakt.',error:'Auf Gelenke kollabieren.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Bent-Arm Stand calisthenics tutorial')},{name:'Negative 90°',dose:'4 × 3',cue:'Langsam in 90°-Position absenken.',error:'Zu schnell ablassen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Negative 90° calisthenics tutorial')}]},
'Shrimp Squat':{source:'https://www.youtube.com/results?search_query=shrimp+squat+progression+tutorial',visual:skills.find(x=>x.name==='Shrimp Squat')?.icon||'🎯',intro:'Einbeinige Kniekraft und Balance mit anderer Hebelposition als Pistol.',gate:'3 × 8 Assisted Shrimp je Seite',drills:[{name:'Reverse Lunge',dose:'3 × 10 je Seite',cue:'Kontrolliert senken.',error:'Vorderes Knie nach innen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Reverse Lunge calisthenics tutorial')},{name:'Assisted Shrimp',dose:'3 × 8 je Seite',cue:'Leicht festhalten, hinteres Knie Richtung Boden.',error:'Am Halt hochziehen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Assisted Shrimp calisthenics tutorial')},{name:'Partial Shrimp',dose:'3 × 6 je Seite',cue:'Tiefe schrittweise erhöhen.',error:'In untere Position fallen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Partial Shrimp calisthenics tutorial')}]},
'Dragon Squat':{source:'https://www.youtube.com/results?search_query=dragon+squat+progression+calisthenics',visual:skills.find(x=>x.name==='Dragon Squat')?.icon||'🎯',intro:'Tiefe einbeinige Kraft, Hüftmobilität und Rotation.',gate:'3 × 6 Assisted Dragon je Seite',drills:[{name:'Cossack Squat',dose:'3 × 8 je Seite',cue:'Hüfte tief, Arbeitsfuß voll belasten.',error:'Ferse abheben.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Cossack Squat calisthenics tutorial')},{name:'Curtsy Lunge',dose:'3 × 8 je Seite',cue:'Kontrollierte Kreuzbewegung.',error:'Knie verdrehen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Curtsy Lunge calisthenics tutorial')},{name:'Assisted Dragon Squat',dose:'3 × 6 je Seite',cue:'Unterstützung für Balance nutzen.',error:'Mit den Armen hochziehen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Assisted Dragon Squat calisthenics tutorial')}]},
'Handstand Walk':{source:'https://www.youtube.com/results?search_query=handstand+walk+progression+tutorial',visual:skills.find(x=>x.name==='Handstand Walk')?.icon||'🎯',intro:'Freier Handstand plus kontrollierte Gewichtsverlagerung von Hand zu Hand.',gate:'10 saubere Shoulder Taps + 20 s freier Handstand',drills:[{name:'Wall Shoulder Taps',dose:'3 × 10',cue:'Gewicht vollständig auf eine Hand verlagern.',error:'Hüfte stark verdrehen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Wall Shoulder Taps calisthenics tutorial')},{name:'Freie Weight Shifts',dose:'4 × 20 s',cue:'Kleine kontrollierte Verlagerungen.',error:'Große hektische Schritte.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Freie Weight Shifts calisthenics tutorial')},{name:'2–5 Handstand-Schritte',dose:'8 Versuche',cue:'Kleine Schritte, Schulter aktiv.',error:'Nach vorn rennen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('2–5 Handstand-Schritte calisthenics tutorial')}]},
'One-Arm Handstand':{source:'https://www.youtube.com/results?search_query=one+arm+handstand+progression+tutorial',visual:skills.find(x=>x.name==='One-Arm Handstand')?.icon||'🎯',intro:'Sehr fortgeschrittene Balance; erst mit stabilem freien Handstand sinnvoll.',gate:'45 s freier Handstand + kontrollierte Weight Shifts',drills:[{name:'Handstand Weight Shifts',dose:'4 × 20 s',cue:'Schulter über tragende Hand bringen.',error:'Nur Hüfte verschieben.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Handstand Weight Shifts calisthenics tutorial')},{name:'Finger-Assisted One Arm',dose:'5 × 10 s je Seite',cue:'Hilfshand schrittweise entlasten.',error:'Hilfshand voll belasten.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('Finger-Assisted One Arm calisthenics tutorial')},{name:'One-Hand Wall Hold',dose:'4 × 10 s je Seite',cue:'Linie stabil halten.',error:'In Schulter einsinken.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent('One-Hand Wall Hold calisthenics tutorial')}]},
};
function planForSkill(skill){return skillPlans[skill.name]||{source:'https://www.youtube.com/results?search_query='+encodeURIComponent(skill.name+' calisthenics progression tutorial'),visual:skill.icon,intro:'Schrittweise Progression mit sauberer Technik.',gate:'Aktuelle Stufe sauber und reproduzierbar',drills:skill.steps.slice(0,3).map(x=>({name:x,dose:'3–4 saubere Sätze',cue:'Kontrolliert und ohne Schwung.',error:'Technikverlust oder Schmerzen.',video:'https://www.youtube.com/results?search_query='+encodeURIComponent(x+' calisthenics tutorial')}))}}

const dailyPlans = [
  {name:'Ganzkörper A',focus:'Zug · Beine · Druck · Rücken · Schulter · Core · Arme',blocks:[['e3','e18'],['e5','e4'],['e11','e8'],['e25','e31']]},
  {name:'Ganzkörper B',focus:'Hintere Kette · Brust · Rücken · Gesäß · Schulter · Core · Unterarme',blocks:[['e17','e7'],['e0','e21'],['e12','e10'],['e27','e29']]},
  {name:'Ganzkörper C',focus:'Beine · obere Brust · Rücken · Gesäß · Schulter · Core · Arme',blocks:[['e18','e6'],['e4','e23'],['e13','e9'],['e24','e31']]}
];
const defaults={xp:280,level:3,streak:0,exercises:baseExercises,skillProgress:{},equipment:{pullup:true,bench:true,dumbbell:true,bands:true,rack:false,barbell:false,rings:false,dips:false},quests:{date:'',train:false,skill:false,challenge:false},records:{spiderman:0},workouts:0,bodyChecks:[],settings:{gameMode:true,coachTone:'motivierend',reminders:false,bodyWeightKg:'',bodyHeightCm:'',age:'',sex:'',strideM:0.75},planRotation:0,lastDailyCompletedDate:'',customSelection:[],activeWorkout:null,skillGoals:{},skillSessions:{},skillEvidence:{},bossWins:{},dailySteps:{},dailyReadiness:{},activityLog:[],calorieLog:[],bonusQuest:{date:'',done:false}};
function localDateKey(d=new Date()){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function load(){
  try{
    const raw=JSON.parse(localStorage.getItem('fitquest-state')||'{}');
    const s={...structuredClone(defaults),...raw};
    s.settings={...defaults.settings,...raw.settings};
    s.equipment={...defaults.equipment,...raw.equipment};
    s.records={...defaults.records,...raw.records};
    s.skillGoals={...defaults.skillGoals,...raw.skillGoals};
    s.skillSessions={...defaults.skillSessions,...raw.skillSessions};
    s.skillEvidence={...defaults.skillEvidence,...raw.skillEvidence}; s.bossWins={...defaults.bossWins,...raw.bossWins};
    s.quests={...defaults.quests,...raw.quests};
    s.dailySteps={...defaults.dailySteps,...raw.dailySteps};
    s.dailyReadiness={...defaults.dailyReadiness,...raw.dailyReadiness};
    if(!Array.isArray(s.activityLog))s.activityLog=[];
    if(!Array.isArray(s.calorieLog))s.calorieLog=[];
    s.bonusQuest={...defaults.bonusQuest,...raw.bonusQuest};
    if(!Array.isArray(s.exercises)||!s.exercises.length)s.exercises=structuredClone(baseExercises);
    if(!Array.isArray(s.customSelection))s.customSelection=[];
    return s;
  }catch{return structuredClone(defaults)}
}
let state=load();
function save(){localStorage.setItem('fitquest-state',JSON.stringify(state))}
function ensureDailyReset(render=false){
  const today=localDateKey();
  if(state.quests.date!==today){
    state.quests={date:today,train:false,skill:false,challenge:false};state.bonusQuest={date:today,done:false};
    if(state.activeWorkout && state.activeWorkout.date!==today)state.activeWorkout=null;
    save();
    if(render && currentView==='home')home();
  }
}
function scheduleMidnightReset(){
  const now=new Date();
  const next=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,0,0,0,150);
  setTimeout(()=>{ensureDailyReset(true);scheduleMidnightReset()},next-now);
}
const $=s=>document.querySelector(s); const view=$('#view');
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.remove('hidden');setTimeout(()=>t.classList.add('hidden'),2400)}
function levelFromXp(){state.level=Math.floor(state.xp/500)+1;return state.level}
function addXp(n,msg){state.xp+=n;levelFromXp();save();toast(`${msg||'Stark!'} +${n} XP ⚡`)}
function bodyWeight(){const n=parseFloat(String(state.settings.bodyWeightKg||'').replace(',','.'));return Number.isFinite(n)&&n>0?n:null}
function exerciseMET(e,rpe='passend'){
  const bw=(e.equipment||'').toLowerCase().includes('körpergewicht');
  let met=bw?3.0:3.5;
  if((e.name||'').toLowerCase().includes('klimm')||(e.name||'').toLowerCase().includes('handstand'))met=4.0;
  const factor={leicht:0.8,passend:1,schwer:1.25,'sehr schwer':1.45}[rpe]||1;
  return Math.min(6.5,Math.max(2.5,met*factor));
}
function kcalEstimate(e,minutes,rpe='passend'){
  const kg=bodyWeight();if(!kg)return null;
  const min=Math.max(0,parseFloat(String(minutes).replace(',','.'))||0);if(!min)return null;
  return Math.round(exerciseMET(e,rpe)*3.5*kg/200*min);
}
function isTimeBasedExercise(e){return /(hold|plank|handstand|l-sit|lever|flag|planche|hang|stütz|stuetz)/i.test((e?.name||'')+' '+(e?.target||''))||/(sek|sec| s\b)/i.test(e?.target||'')}
function autoSetMinutes(e,set){
  if(isTimeBasedExercise(e)){
    const secs=Math.max(0,...[set.reps,set.leftReps,set.rightReps].map(parseNum).filter(Number.isFinite));
    return Math.max(0.35,secs?secs/60+0.12:0.5);
  }
  const reps=isUnilateralExercise(e)
    ? [set.leftReps,set.rightReps].map(parseNum).filter(Number.isFinite).reduce((a,b)=>a+b,0)
    : (parseNum(set.reps)||0);
  return Math.max(0.4,reps?reps*3/60+0.18:0.5);
}
function exerciseSessionKcal(id){const ent=workoutEntry(id);if(!ent?.sets?.length)return 0;return Math.round(ent.sets.reduce((a,st)=>a+(Number(st.kcal)||0),0))}
function currentWorkoutKcal(){const ids=state.activeWorkout?.ids||[];return Math.round(ids.reduce((a,id)=>a+exerciseSessionKcal(id),0))}
function currentWorkoutMinutes(){const ids=state.activeWorkout?.ids||[];return Math.round(ids.reduce((a,id)=>{const ent=workoutEntry(id);return a+(ent?.sets||[]).reduce((x,st)=>x+(Number(st.minutes)||0),0)},0)*10)/10}
function stepKcal(steps){const kg=bodyWeight();if(!kg)return null;const stride=parseFloat(state.settings.strideM)||0.75;const km=Math.max(0,steps)*stride/1000;return Math.round(kg*km*0.5)}
function todaySteps(){return Number(state.dailySteps[localDateKey()]?.steps||0)}
function todayStepKcal(){return state.dailySteps[localDateKey()]?.kcal??stepKcal(todaySteps())}
function exerciseCaloriesForDate(key=localDateKey()){return state.calorieLog.filter(x=>x.date===key&&x.type==='exercise').reduce((a,x)=>a+(Number(x.kcal)||0),0)}
function totalCaloriesForDate(key=localDateKey()){const ex=exerciseCaloriesForDate(key);const step=state.dailySteps[key]?.kcal??stepKcal(Number(state.dailySteps[key]?.steps||0))??0;return ex+(Number(step)||0)}
function calorieWeek(){const start=weekStart();return Array.from({length:7},(_,i)=>{const d=new Date(start);d.setDate(start.getDate()+i);const key=localDateKey(d);return {key,label:['Mo','Di','Mi','Do','Fr','Sa','So'][i],exercise:exerciseCaloriesForDate(key),steps:state.dailySteps[key]?.kcal??stepKcal(Number(state.dailySteps[key]?.steps||0))??0,total:totalCaloriesForDate(key)}})}
function todayReadiness(){return state.dailyReadiness[localDateKey()]||null}
function adaptiveExerciseCount(){const r=todayReadiness();if(!r)return 8;const t=Number(r.minutes||45);if(t<=20)return 4;if(t<=30)return 6;return 8}
function currentDailyIds(){const p=currentDailyPlan();return p.blocks.flat().slice(0,adaptiveExerciseCount())}
function weekStart(d=new Date()){const x=new Date(d);const day=(x.getDay()+6)%7;x.setDate(x.getDate()-day);x.setHours(0,0,0,0);return x}
function recentWeek(){const start=weekStart();return Array.from({length:7},(_,i)=>{const d=new Date(start);d.setDate(start.getDate()+i);const key=localDateKey(d);return {key,label:['Mo','Di','Mi','Do','Fr','Sa','So'][i],items:state.activityLog.filter(x=>x.date===key),steps:Number(state.dailySteps[key]?.steps||0)}})}
function characterStats(){
 const logs=state.exercises.flatMap(e=>(e.history||[]).map(h=>({e,h})));const count=g=>logs.filter(x=>muscleBucket(x.e.group)===g).length;
 const skill=s=>skills.filter(x=>x.family===s).reduce((a,x)=>a+(state.skillProgress[x.id]||0),0);
 return {Stärke:Math.min(99,10+state.workouts*2),Zug:Math.min(99,8+count('pull')+skill('Pull')*2),Push:Math.min(99,8+count('push')+skill('Push')*2),Beine:Math.min(99,8+count('legs')+skill('Beine')*2),Core:Math.min(99,8+count('core')+skill('Core')*2),Balance:Math.min(99,5+skill('Balance')*3)}
}
function coachHint(){const r=todayReadiness();if(!r)return 'Mach vor dem Training den 10-Sekunden-Tagesform-Check. Dann passt FitQuest Umfang und Tempo an.';if(r.soreness==='stark')return 'Starker Muskelkater: heute sauber und kontrolliert, kein erzwungener PR. Bei Schmerz die betroffene Übung ersetzen.';if(Number(r.energy)<=2)return 'Energie niedrig: heute kompakt bleiben und Technik priorisieren.';if(Number(r.energy)>=4)return 'Gute Tagesform: wenn die Technik stabil bleibt, ist heute ein Progressionsversuch drin.';return 'Solide Tagesform: halte dich an den Plan und steigere nur bei sauberer Ausführung.'}
function bonusQuest(){
 const qs=[['🧘 Mobility-Miniquest','5 Minuten Schulter- und Hüftmobilität',60],['🪝 Grip-Miniquest','3 × 20 Sekunden lockeres Hängen',70],['🚶 Nebenquest','10 Minuten flotter Spaziergang',60],['🧱 Core-Miniquest','3 × 20 Sekunden sauberer Hollow Hold',70]];
 const idx=Math.abs(localDateKey().split('-').join(''))%qs.length;return qs[idx];
}
function weeklyGoal(){const w=recentWeek(),workouts=w.flatMap(x=>x.items).filter(x=>x.type==='workout').length,skills=w.flatMap(x=>x.items).filter(x=>x.type==='skill').length;return {workouts,skills}}
function currentEnemy(){const st=characterStats(),[name,val]=Object.entries(st).sort((a,b)=>a[1]-b[1])[0];const meta={Stärke:['🪨','Der Koloss'],Zug:['🦍','Der Greifer'],Push:['🛡️','Der Brecher'],Beine:['🐗','Der Stampfer'],Core:['🐙','Der Kernfresser'],Balance:['🌀','Der Wankende']}[name]||['👾','Der Gegner'];return {stat:name,val,icon:meta[0],name:meta[1],hp:Math.max(0,100-val)}}
function scheduleStepReminder(){
 const now=new Date(),target=new Date();target.setHours(22,0,0,0);if(now>=target)target.setDate(target.getDate()+1);
 setTimeout(()=>{if(!todaySteps()){if(Notification.permission==='granted')new Notification('FitQuest',{body:'22:00 Uhr – trage noch deine heutigen Schritte ein. 👟',icon:'icon-192.png'});if(currentView==='home')stepReminderModal();}scheduleStepReminder()},target-now);
}
function header(){document.querySelectorAll('.bottomnav button').forEach(b=>b.classList.toggle('active',b.dataset.view===currentView));}
let currentView='home';
const pct=(v,max)=>Math.min(100,Math.round(v/max*100));
function completeQuest(k,xp,msg){ensureDailyReset();if(state.quests[k])return false;state.quests[k]=true;save();addXp(xp,msg||'Daily Quest geschafft!');return true}
function home(){
  ensureDailyReset();levelFromXp();const next=500-(state.xp%500), plan=currentDailyPlan(),r=todayReadiness(),steps=todaySteps(),skcal=todayStepKcal(),stats=characterStats();
  view.innerHTML=`
<section class="hero"><div class="levelrow"><div><div class="muted">DEIN CHARAKTER</div><div class="level">LEVEL ${state.level}</div></div><div class="xp">⚡ ${state.xp} XP</div></div><div class="bar"><i style="width:${pct(state.xp%500,500)}%"></i></div><div class="statrow"><div class="stat"><b>${state.workouts}</b><span class="tiny">Workouts</span></div><div class="stat"><b>${Object.values(state.skillProgress).filter(x=>x>=5).length}</b><span class="tiny">Skills</span></div><div class="stat"><b>${state.records.spiderman}</b><span class="tiny">Spider-Runden</span></div><div class="stat"><b>${next}</b><span class="tiny">XP bis Level</span></div></div></section>
<div class="sectiontitle"><h2>🎮 Charakterwerte</h2><span class="muted">Spielwerte aus deinem Verlauf</span></div><div class="chargrid">${Object.entries(stats).map(([k,v])=>`<div class="charstat"><span>${k}</span><b>${v}</b><div class="bar mini"><i style="width:${v}%"></i></div></div>`).join('')}</div>
<div class="sectiontitle"><h2>❤️ Tagesform</h2><span class="tag ${r?'green':'yellow'}">${r?`${r.minutes} Min.`:'noch offen'}</span></div><div class="card"><p class="muted">${coachHint()}</p><button class="btn secondary block" onclick="readinessCheck()">${r?'Tagesform ändern':'10-Sekunden-Check starten'}</button></div>
<div class="sectiontitle"><h2>🎯 Heute</h2><span class="tag green">${plan.name}</span></div>
<div class="card"><h3>Coach sagt</h3><p class="muted">Heute sind ${adaptiveExerciseCount()} Übungen vorgesehen. Muskelgruppen wechseln sich ab; bei nur 20–30 Minuten kürzt FitQuest die Einheit automatisch.</p><button class="btn block" onclick="go('training')">Daily Training öffnen</button></div>
<div class="sectiontitle"><h2>👟 Schritte</h2><span class="muted">Erinnerung 22:00</span></div><div class="card stepcard"><div><div class="kpi smallkpi">${steps.toLocaleString('de-DE')}</div><div class="muted">Schritte heute${skcal!=null?` · ca. ${skcal} kcal*`:''}</div></div><button class="btn secondary" onclick="openSteps()">Eintragen</button><div class="tiny full">* sehr grobe Schätzung aus Schritten, Schrittlänge und Körpergewicht; kein Messwert.</div></div>
<div class="sectiontitle"><h2>🔥 Kalorien heute</h2><span class="muted">Schätzung</span></div><div class="card kcalcard"><div class="kcalrow"><div><div class="kpi">≈ ${totalCaloriesForDate()} kcal</div><div class="muted">Training ≈ ${exerciseCaloriesForDate()} · Schritte ≈ ${todayStepKcal()||0}</div></div><button class="btn secondary" onclick="go('training');setTimeout(()=>showCalories(),0)">Rechner öffnen</button></div><div class="tiny">Aktivitätskalorien – keine Messung und nicht dein gesamter Tagesverbrauch.</div></div>
<div class="sectiontitle"><h2>📜 Daily Quests</h2><span class="muted">Reset täglich 00:00</span></div>
<div class="card">${quest('train','Training absolvieren',250)}${quest('skill','10 Min. Skilltraining',120)}${quest('challenge','Spider-Man-Challenge',300)}</div>
<div class="sectiontitle"><h2>🔥 Wochenziel</h2><span class="muted">Regeneration zählt mit</span></div>${(()=>{const w=weeklyGoal();return `<div class="card"><div class="goalrow"><span>🏋️ Krafttraining</span><b>${Math.min(w.workouts,3)}/3</b></div><div class="bar mini"><i style="width:${Math.min(100,w.workouts/3*100)}%"></i></div><div class="goalrow"><span>🎯 Skill-Sessions</span><b>${Math.min(w.skills,2)}/2</b></div><div class="bar mini"><i style="width:${Math.min(100,w.skills/2*100)}%"></i></div><div class="tiny">Kein Tages-Streak: eine Pause oder Krankheit zerstört deine Serie nicht.</div></div>`})()}
<div class="sectiontitle"><h2>🎲 Nebenquest</h2><span class="tag yellow">optional</span></div>${(()=>{const q=bonusQuest();return `<div class="card"><h3>${q[0]}</h3><p class="muted">${q[1]}</p><button class="btn secondary block" ${state.bonusQuest.done?'disabled':''} onclick="completeBonusQuest()">${state.bonusQuest.done?'✅ Heute erledigt':`Erledigt · +${q[2]} XP`}</button></div>`})()}
<div class="sectiontitle"><h2>👾 Muskelgegner</h2></div>${(()=>{const e=currentEnemy();return `<div class="boss compactboss"><div class="bossicon">${e.icon}</div><div><div class="muted">SCHWÄCHSTER CHARAKTERWERT: ${e.stat}</div><h3>${e.name}</h3><div class="enemybar"><i style="width:${e.hp}%"></i></div><div class="tiny">Je stärker dieser Bereich durch echtes Training wird, desto weniger Lebenspunkte bleiben.</div></div></div>`})()}
<div class="sectiontitle"><h2>👹 Nächster Boss</h2></div>
<div class="boss"><div class="bossicon">🦵</div><div class="muted">BOSSFIGHT</div><h2>Der Einbeinige</h2><p>Pistol Squat – finde zuerst dein aktuelles Level.</p><button class="btn warn" onclick="openSkill('s0')">Skill prüfen</button></div>`
}
window.readinessCheck=()=>{const r=todayReadiness()||{energy:3,soreness:'leicht',minutes:45};modal(`<h2>❤️ Tagesform</h2><div class="formgrid"><div class="field"><label>Energie 1–5</label><input id="rEnergy" type="range" min="1" max="5" value="${r.energy}" oninput="document.getElementById('energyOut').textContent=this.value"><div id="energyOut" class="kpi smallkpi">${r.energy}</div></div><div class="field"><label>Muskelkater</label><select id="rSore"><option ${r.soreness==='keiner'?'selected':''}>keiner</option><option ${r.soreness==='leicht'?'selected':''}>leicht</option><option ${r.soreness==='mittel'?'selected':''}>mittel</option><option ${r.soreness==='stark'?'selected':''}>stark</option></select></div><div class="field"><label>Zeit heute</label><select id="rMin"><option>20</option><option>30</option><option ${r.minutes==45?'selected':''}>45</option><option ${r.minutes==60?'selected':''}>60</option></select></div><button class="btn" onclick="saveReadiness()">Übernehmen</button></div>`)}
window.saveReadiness=()=>{state.dailyReadiness[localDateKey()]={energy:Number($('#rEnergy').value),soreness:$('#rSore').value,minutes:Number($('#rMin').value)};save();closeModal();home()}
window.openSteps=()=>{const cur=state.dailySteps[localDateKey()]?.steps||'';modal(`<h2>👟 Schritte eintragen</h2><div class="formgrid"><div class="field"><label>Schritte heute</label><input id="stepInput" inputmode="numeric" type="number" min="0" value="${cur}" placeholder="z. B. 8500"></div><div class="notice">Kalorien werden nur grob geschätzt. Für eine bessere Schätzung kannst du in Einstellungen Körpergewicht und Schrittlänge hinterlegen.</div><button class="btn" onclick="saveSteps()">Speichern</button></div>`)}
window.saveSteps=()=>{const steps=Math.max(0,Number($('#stepInput').value)||0);state.dailySteps[localDateKey()]={steps,kcal:stepKcal(steps),savedAt:new Date().toISOString()};state.activityLog.push({date:localDateKey(),type:'steps',label:`${steps} Schritte`});save();closeModal();addXp(10,'Schritte gespeichert!');home()}
function stepReminderModal(){modal(`<div class="celebrate">👟</div><h2>22:00 – Schritte fehlen noch</h2><p>Trag kurz deine heutigen Schritte ein, dann ist der Tag komplett.</p><button class="btn block" onclick="closeModal();openSteps()">Schritte eintragen</button>`)}
window.completeBonusQuest=()=>{if(state.bonusQuest.done)return;const q=bonusQuest();state.bonusQuest={date:localDateKey(),done:true};state.activityLog.push({date:localDateKey(),type:'bonus',label:q[0]});save();addXp(q[2],'Nebenquest geschafft!');home()}
function quest(k,label,xp){return `<div class="quest" onclick="toggleQuest('${k}',${xp})"><div class="check ${state.quests[k]?'done':''}">${state.quests[k]?'✓':''}</div><div><b>${label}</b><div class="muted">${state.quests[k]?'Heute erledigt':`+${xp} XP`}</div></div></div>`}
window.toggleQuest=(k,xp)=>{ensureDailyReset();if(state.quests[k])return toast('Heute schon erledigt ✅');completeQuest(k,xp,'Quest geschafft!');home()}
function currentDailyPlan(){return dailyPlans[(state.planRotation||0)%dailyPlans.length]}
function getExercise(id){return state.exercises.find(e=>e.id===id)}

function movementKind(e={}){
  const n=((e.name||'')+' '+(e.group||'')+' '+(e.equipment||'')).toLowerCase();
  if(/handstand|wall walk|wall float|one-arm handstand|one arm handstand/.test(n))return 'handstand';
  if(/muscle-up|muscle up/.test(n))return 'muscleup';
  if(/front lever|back lever|german hang|skin the cat/.test(n))return 'lever';
  if(/planche|frog stand|90°|90° hold|bent-arm stand/.test(n))return 'planche';
  if(/human flag|vertical flag|tuck flag|straddle flag/.test(n))return 'flag';
  if(/l-sit|l sit|v-sit|v sit|tuck sit|compression|stütz halten/.test(n))return 'lsit';
  if(/klimm|pull-up|pull up|chin-up|hang|active hang|chest-to-bar|archer pull|typewriter/.test(n))return 'pullup';
  if(/liegestütz|push-up|push up|pseudo planche/.test(n))return 'pushup';
  if(/pistol|shrimp|dragon squat|split squat|lunge|cossack|curtsy|bulgarian/.test(n))return 'lunge';
  if(/squat|kniebeug/.test(n))return 'squat';
  if(/kreuzheben|deadlift|hinge/.test(n))return 'hinge';
  if(/bankdrücken|schrägbank|schrägboden|chest press/.test(n))return 'bench';
  if(/schulterdrücken|über kopf/.test(n) && !/trizeps/.test(n))return 'overhead';
  if(/rudern|row/.test(n))return 'row';
  if(/face pull|reverse butterfly|reverse-ziehen|reverse ziehen|weit-arm|weit arm/.test(n))return 'rear';
  if(/seitheben|frontheben/.test(n))return 'raise';
  if(/curl|bizeps|unterarmbeuger|unterarmstrecker/.test(n))return 'curl';
  if(/trizeps/.test(n))return 'triceps';
  if(/crunch|bein hoch|leg raise|hollow|dragon flag|rotation/.test(n))return 'core';
  if(/waden|calf/.test(n))return 'calf';
  if(/hip thrust/.test(n))return 'hipthrust';
  if(/esel|kickback|über-kreuz|über kreuz/.test(n))return 'glute';
  if(/handquetscher|grip/.test(n))return 'grip';
  return 'generic';
}
function fig(x,y,head=8,arms='down',legs='stand',lean=0){
  const tr=`translate(${x} ${y}) rotate(${lean})`;
  let a=arms==='up'?'<path d="M0 2 L-13 -18 M0 2 L13 -18"/>':arms==='side'?'<path d="M0 2 L-17 1 M0 2 L17 1"/>':arms==='front'?'<path d="M0 2 L-15 -6 M0 2 L15 -6"/>':'<path d="M0 2 L-10 16 M0 2 L10 16"/>';
  let l=legs==='wide'?'<path d="M0 22 L-13 43 M0 22 L13 43"/>':legs==='split'?'<path d="M0 22 L-18 40 M0 22 L12 44"/>':legs==='sit'?'<path d="M0 22 L18 22 M18 22 L27 38"/>':'<path d="M0 22 L-8 44 M0 22 L8 44"/>';
  return `<g transform="${tr}" class="stick"><circle cx="0" cy="-10" r="${head}"/><path d="M0 -2 L0 22"/>${a}${l}</g>`;
}
function exerciseIllustration(e,size='small'){
  if(e?.media&&/\.(png|jpe?g|webp|gif)(\?|$)/i.test(e.media))return `<div class="exvisual ${size}"><img src="${e.media}" alt="Ausführung ${e.name}" loading="lazy"></div>`;
  const k=movementKind(e), W=size==='large'?250:92,H=size==='large'?128:68;
  let body='';
  const bar='<path class="equip" d="M18 12 H74"/><path class="equip" d="M22 12 V17 M70 12 V17"/>';
  switch(k){
    case 'pullup': body=bar+fig(46,34,6,'up','stand',0)+'<path class="motion" d="M80 50 Q86 35 80 20"/>';break;
    case 'pushup': body='<g transform="translate(8 13) rotate(72 40 22)">'+fig(40,22,5,'front','stand',0)+'</g><path class="floor" d="M8 57 H84"/><path class="motion" d="M77 46 V28"/>';break;
    case 'squat': body=fig(28,16,5,'front','wide',0)+fig(66,28,5,'front','wide',0)+'<path class="motion" d="M47 19 V42"/>';break;
    case 'lunge': body=fig(27,17,5,'down','split',0)+fig(66,27,5,'down','split',0)+'<path class="motion" d="M48 18 V41"/>';break;
    case 'hinge': body=fig(29,17,5,'down','stand',0)+fig(65,19,5,'down','stand',35)+'<path class="equip" d="M53 55 H82"/><path class="motion" d="M47 20 Q55 26 60 36"/>';break;
    case 'bench': body='<path class="equip" d="M10 50 H78 M25 50 V61 M67 50 V61"/><g transform="translate(47 32) rotate(90)">'+fig(0,0,5,'up','stand',0)+'</g><path class="motion" d="M67 38 V17"/>';break;
    case 'overhead': body=fig(45,18,5,'up','stand',0)+'<circle class="weight" cx="31" cy="0" r="4"/><circle class="weight" cx="59" cy="0" r="4"/><path class="motion" d="M76 31 V8"/>';break;
    case 'row': body=fig(46,19,5,'front','stand',28)+'<circle class="weight" cx="66" cy="38" r="4"/><path class="motion" d="M73 45 Q73 29 62 24"/>';break;
    case 'rear': body=fig(46,18,5,'side','stand',30)+'<circle class="weight" cx="24" cy="26" r="3"/><circle class="weight" cx="68" cy="26" r="3"/><path class="motion" d="M22 42 Q22 30 27 22 M70 42 Q70 30 65 22"/>';break;
    case 'raise': body=fig(28,18,5,'down','stand',0)+fig(66,18,5,'side','stand',0)+'<path class="motion" d="M47 40 Q49 23 56 17"/>';break;
    case 'curl': body=fig(46,18,5,'down','stand',0)+'<circle class="weight" cx="36" cy="50" r="4"/><circle class="weight" cx="56" cy="50" r="4"/><path class="motion" d="M72 47 Q80 30 69 21"/>';break;
    case 'triceps': body=fig(46,18,5,'up','stand',0)+'<circle class="weight" cx="46" cy="-2" r="5"/><path class="motion" d="M75 28 Q81 13 70 2"/>';break;
    case 'core': body='<path class="floor" d="M8 57 H84"/><g transform="translate(22 45) rotate(-72)">'+fig(0,0,5,'front','sit',0)+'</g><path class="motion" d="M65 46 Q69 27 56 17"/>';break;
    case 'calf': body=fig(45,17,5,'down','stand',0)+'<path class="floor" d="M29 61 H61"/><path class="motion" d="M72 51 V31"/>';break;
    case 'hipthrust': body='<path class="equip" d="M9 35 H32"/><path class="floor" d="M7 58 H86"/><g transform="translate(48 38) rotate(78)">'+fig(0,0,5,'down','sit',0)+'</g><path class="motion" d="M74 50 Q77 33 68 23"/>';break;
    case 'glute': body=fig(35,18,5,'front','stand',28)+'<path class="motion" d="M60 48 Q74 42 80 29"/><path class="stick" d="M46 42 L75 31"/>';break;
    case 'grip': body='<circle class="weight" cx="46" cy="34" r="15"/><path class="stick" d="M31 28 Q46 17 61 28 M31 40 Q46 51 61 40"/><path class="motion" d="M19 34 H31 M73 34 H61"/>';break;
    case 'handstand': body='<path class="floor" d="M8 58 H84"/><g transform="translate(46 48) rotate(180)">'+fig(0,0,5,'up','stand',0)+'</g><path class="motion" d="M76 42 Q81 26 74 13"/>';break;
    case 'muscleup': body=bar+fig(29,34,5,'up','stand',0)+fig(67,13,5,'down','stand',0)+'<path class="motion" d="M45 49 Q58 25 58 8"/>';break;
    case 'lever': body=bar+'<g transform="translate(46 13) rotate(90)">'+fig(0,0,5,'up','stand',0)+'</g><path class="motion" d="M67 52 Q78 34 69 20"/>';break;
    case 'planche': body='<path class="floor" d="M8 58 H84"/><g transform="translate(43 47) rotate(87)">'+fig(0,0,5,'up','stand',0)+'</g><path class="motion" d="M75 48 Q79 34 73 22"/>';break;
    case 'flag': body='<path class="equip" d="M18 7 V61"/><g transform="translate(25 34) rotate(90)">'+fig(0,0,5,'up','stand',0)+'</g><path class="motion" d="M72 49 Q80 34 72 19"/>';break;
    case 'lsit': body='<path class="floor" d="M8 58 H84"/>'+fig(39,18,5,'down','sit',0)+'<path class="stick" d="M39 40 L76 40"/><path class="motion" d="M78 51 V32"/>';break;
    default: body=fig(28,18,5,'down','stand',0)+fig(65,18,5,'side','stand',0)+'<path class="motion" d="M46 48 Q50 31 57 22"/>';
  }
  const label=(e.name||'Übung').replace(/[<>]/g,'');
  return `<div class="exvisual ${size}" title="${label}"><svg viewBox="0 0 92 68" role="img" aria-label="Schematische Ausführung: ${label}" preserveAspectRatio="xMidYMid meet">${body}</svg><span>Start → Ziel</span></div>`;
}

function ensureWorkoutShape(){
  const w=state.activeWorkout;if(!w)return null;
  w.done=w.done||{};w.entries=w.entries||{};
  for(const id of (w.ids||[])){
    if(!w.entries[id])w.entries[id]={sets:[],completed:!!w.done[id]};
    if(w.done[id])w.entries[id].completed=true;
  }
  return w;
}
function workoutEntry(id){const w=ensureWorkoutShape();if(!w)return null;return w.entries[id]||(w.entries[id]={sets:[],completed:false})}
function sessionDone(id){const e=workoutEntry(id);return !!e?.completed}
function sessionSetCount(id){return workoutEntry(id)?.sets?.length||0}
function startSession(mode,ids,title){
  const cur=state.activeWorkout;
  if(!cur||cur.date!==localDateKey()||cur.mode!==mode||JSON.stringify(cur.ids)!==JSON.stringify(ids)){
    state.activeWorkout={date:localDateKey(),mode,title,ids:[...ids],done:{},entries:{}};
  }
  ensureWorkoutShape();save();
}
function isDumbbellExercise(e){return /kurzhantel/i.test(e?.equipment||'')||/kurzhantel|hantel/i.test(e?.name||'')}
function isUnilateralExercise(e){
  if(e?.sideMode==='unilateral')return true;if(e?.sideMode==='bilateral')return false;
  return /(bulgarian|einbeinig|einarmig|ein-armig|ein-arm|eseltritt|donkey|split squat|pistol|shrimp|dragon squat|über-kreuz|ueber-kreuz)/i.test(e?.name||'');
}
function defaultDumbbellCount(e){return /(einarmig|ein-armig|ein-arm|eseltritt|donkey)/i.test(e?.name||'')?1:2}
function parseNum(v){const n=parseFloat(String(v??'').replace(',','.'));return Number.isFinite(n)?n:null}
function formatKg(n){return Number.isFinite(n)?String(Math.round(n*100)/100).replace('.',',')+' kg':''}

function syncCompletedExerciseHistory(id){
  const e=getExercise(id),ent=workoutEntry(id);if(!e||!ent?.completed)return;
  e.history=e.history||[];
  let h=[...e.history].reverse().find(x=>x.sessionDate===localDateKey());
  const summary=ent.sets.map(st=>isUnilateralExercise(e)?`L${st.leftReps||'-'}/R${st.rightReps||'-'}`:(st.reps||'-')).join(', ');
  const weights=ent.sets.map(st=>st.weightPerDumbbell).filter(Number.isFinite);const bestWeight=weights.length?Math.max(...weights):null;
  if(!h){h={date:new Date().toISOString(),sessionDate:localDateKey()};e.history.push(h)}
  h.reps=summary;h.load=bestWeight!=null?`${bestWeight} kg pro Hantel`:e.load;h.weightPerDumbbell=bestWeight;h.sets=structuredClone(ent.sets);
}
function latestSessionSummary(id){
  const ent=workoutEntry(id);if(!ent?.sets?.length)return '';
  const e=getExercise(id), last=ent.sets[ent.sets.length-1], n=ent.sets.length;
  const reps=isUnilateralExercise(e)?`L ${last.leftReps||'–'} · R ${last.rightReps||'–'}`:`${last.reps||'–'} Wdh.`;
  const wt=last.weightPerDumbbell?`${formatKg(last.weightPerDumbbell)} / Hantel${last.dumbbellCount?` · ${last.dumbbellCount}× = ${formatKg(last.weightPerDumbbell*last.dumbbellCount)} gesamt`:''}`:(last.load||'');
  return `${n} Satz${n===1?'':'e'} · ${reps}${wt?' · '+wt:''}`;
}
function training(){showDailyTraining()}
function trainingTabs(active){return `<div class="tabs"><button class="tab ${active==='daily'?'active':''}" onclick="showDailyTraining()">Heute</button><button class="tab ${active==='custom'?'active':''}" onclick="showCustomBuilder()">Individuell</button><button class="tab ${active==='catalog'?'active':''}" onclick="showAllExercises()">Übungen</button><button class="tab ${active==='calories'?'active':''}" onclick="showCalories()">🔥 Kalorien</button><button class="tab ${active==='challenge'?'active':''}" onclick="challenge()">🕷️ Challenge</button></div>`}
function showDailyTraining(){
  const plan=currentDailyPlan(), ids=currentDailyIds();startSession('daily',ids,plan.name);
  const done=ids.filter(sessionDone).length;
  view.innerHTML=`<div class="sectiontitle"><div><h2>🏋️ Daily Training</h2><div class="muted">${plan.name} · ca. 30–45 Min.</div></div><span class="tag green">${done}/${ids.length}</span></div>
  ${trainingTabs('daily')}
  <div class="training-summary"><b>Heute auf einen Blick</b><span>${plan.focus}</span><small>Vier Wechselblöcke: A → B → A → B. So bekommt die gerade belastete Muskelgruppe während der anderen Übung Zeit zur Erholung.</small><small>🔥 Bisher im Daily Training: <b>≈ ${currentWorkoutKcal()} kcal*</b></small></div>
  <div class="workout-overview">${Array.from({length:Math.ceil(ids.length/2)},(_,i)=>workoutBlock(ids.slice(i*2,i*2+2),i)).join('')}</div>
  <button class="btn block" style="margin-top:14px" onclick="completeWorkout('daily')">✅ Training abschließen</button>`
}
window.showDailyTraining=showDailyTraining;
function workoutBlock(ids,i){
  const letters=['A','B','C','D'];
  return `<section class="pairblock"><div class="pairhead"><b>Wechselblock ${letters[i]}</b><span>abwechselnd</span></div>${ids.map((id,n)=>compactExercise(getExercise(id),n+1)).join('')}</section>`
}
function compactExercise(e,n){if(!e)return '';const done=sessionDone(e.id),summary=latestSessionSummary(e.id),ek=exerciseSessionKcal(e.id);return `<div class="compact-exercise ${done?'isdone':''}"><div class="exno">${done?'✓':n}</div>${exerciseIllustration(e)}<button class="exercise-main" onclick="logExercise('${e.id}')"><b>${e.name}</b><span>${e.group} · ${e.equipment}</span>${summary?`<small class="savedset">💾 ${summary}</small>`:''}${ek?`<small class="savedset">🔥 ${done?'Übung':'bisher'} ≈ ${ek} kcal*</small>`:''}</button><div class="exercise-target"><b>${e.target||'3 × 8–12'}</b><span>${isDumbbellExercise(e)?'Gewicht je Hantel':(e.load||'Gewicht offen')}</span></div></div>`}
function groupExercises(exercises,renderRow){
  const groups={};exercises.forEach(e=>(groups[e.group||'Sonstiges']??=[]).push(e));
  return Object.entries(groups).sort((a,b)=>a[0].localeCompare(b[0],'de')).map(([g,es])=>`<details class="exgroup"><summary>${g}<span>${es.length}</span></summary><div class="list">${es.map(renderRow).join('')}</div></details>`).join('')
}
window.showAllExercises=()=>{view.innerHTML=`<div class="sectiontitle"><h2>Übungskatalog</h2><button class="btn" onclick="openExerciseForm()">+ Neue Übung</button></div>${trainingTabs('catalog')}<div class="notice">Dein kompletter Katalog bleibt editierbar. Muskelgruppen sind eingeklappt, damit du schneller findest, was du suchst.</div><div style="margin-top:12px">${groupExercises(state.exercises.filter(e=>e.active),e=>exerciseRow(e))}</div>`}
function exerciseRow(e){return `<div class="exercise visualrow">${exerciseIllustration(e)}<div><div class="name">${e.name}</div><div class="muted">${e.equipment} · Ziel ${e.target}</div></div><button class="btn secondary small" onclick="logExercise('${e.id}')">Eintragen</button></div>`}
window.showCustomBuilder=()=>{
  const selected=new Set(state.customSelection||[]);
  view.innerHTML=`<div class="sectiontitle"><div><h2>🎛️ Individuelles Training</h2><div class="muted">Bis zu 8 Übungen frei wählen</div></div><span class="tag ${selected.size===8?'yellow':'green'}">${selected.size}/8</span></div>${trainingTabs('custom')}
  <div class="training-summary"><b>Deine Session</b><span>${selected.size?`${selected.size} Übungen gewählt`:'Noch nichts gewählt'}</span><small>Wähle frei aus deinem Katalog. Die Reihenfolge kannst du anschließend automatisch muskelgruppenfreundlich sortieren lassen.</small></div>
  <div class="custom-actions"><button class="btn secondary" onclick="autoOrderCustom()">↕️ Sinnvoll sortieren</button><button class="btn ${selected.size?'':'disabled'}" onclick="startCustomWorkout()">▶ Starten</button></div>
  <div style="margin-top:12px">${groupExercises(state.exercises.filter(e=>e.active),e=>customPickRow(e,selected.has(e.id)))}</div>`
}
function customPickRow(e,checked){return `<label class="exercise pickrow visualrow">${exerciseIllustration(e)}<div><div class="name">${e.name}</div><div class="muted">${e.equipment} · ${e.target}</div></div><input type="checkbox" ${checked?'checked':''} onchange="toggleCustom('${e.id}',this.checked)"></label>`}
window.toggleCustom=(id,on)=>{state.customSelection=state.customSelection||[];if(on&&!state.customSelection.includes(id)){if(state.customSelection.length>=8){toast('Maximal 8 Übungen');showCustomBuilder();return}state.customSelection.push(id)}if(!on)state.customSelection=state.customSelection.filter(x=>x!==id);save();showCustomBuilder()}
function muscleBucket(group=''){const g=group.toLowerCase();if(g.includes('rücken')||g.includes('bizeps'))return 'pull';if(g.includes('brust')||g.includes('trizeps')||g.includes('schulter'))return 'push';if(g.includes('bein')||g.includes('waden')||g.includes('oberschenkel')||g.includes('po'))return 'legs';if(g.includes('bauch')||g.includes('core'))return 'core';if(g.includes('unterarm'))return 'forearm';return 'other'}
window.autoOrderCustom=()=>{
  const src=(state.customSelection||[]).map(getExercise).filter(Boolean), buckets={};src.forEach(e=>(buckets[muscleBucket(e.group)]??=[]).push(e.id));
  const order=['pull','legs','push','core','forearm','other'];const out=[];let changed=true;
  while(changed){changed=false;for(const k of order){if(buckets[k]?.length){out.push(buckets[k].shift());changed=true}}}
  state.customSelection=out;save();toast('Muskelgruppen abwechselnd sortiert ↕️');showCustomBuilder();
}
window.startCustomWorkout=()=>{const ids=(state.customSelection||[]).slice(0,8);if(!ids.length)return toast('Wähle mindestens eine Übung');startSession('custom',ids,'Individuelles Training');renderCustomWorkout()}
function renderCustomWorkout(){const ids=state.activeWorkout?.mode==='custom'?state.activeWorkout.ids:(state.customSelection||[]);view.innerHTML=`<div class="sectiontitle"><div><h2>🎛️ Individuelles Training</h2><div class="muted">${ids.length} Übungen</div></div><span class="tag green">${ids.filter(sessionDone).length}/${ids.length}</span></div>${trainingTabs('custom')}<div class="training-summary"><b>Aktuelle Session</b><span>🔥 bisher ≈ ${currentWorkoutKcal()} kcal*</span><small>* geschätzte Aktivitätskalorien</small></div><div class="workout-overview single">${ids.map((id,i)=>compactExercise(getExercise(id),i+1)).join('')}</div><button class="btn block" style="margin-top:14px" onclick="completeWorkout('custom')">✅ Training abschließen</button><button class="btn secondary block" style="margin-top:8px" onclick="showCustomBuilder()">Übungen ändern</button>`}
window.openExerciseForm=()=>modal(`<h2>Neue Übung</h2><div class="formgrid">
<div class="field"><label>Name</label><input id="fName" placeholder="z. B. einarmiges Rudern"></div>
<div class="field"><label>Muskelgruppe</label><input id="fGroup" placeholder="z. B. Rücken"></div>
<div class="field"><label>Equipment</label><select id="fEq"><option>Körpergewicht</option><option>Kurzhantel</option><option>Kurzhantel + Bank</option><option>Band</option><option>Klimmzugstange</option><option>Sonstiges</option></select></div>
<div class="field"><label>Gewicht / Band</label><input id="fLoad" placeholder="z. B. 17,5 kg oder lila"></div>
<div class="field"><label>Ziel</label><input id="fTarget" value="3 × 8–12"></div><div class="field"><label>Seiten getrennt erfassen?</label><select id="fSideMode"><option value="auto">Automatisch erkennen</option><option value="bilateral">Nein</option><option value="unilateral">Ja – links/rechts</option></select></div><div class="field"><label>Eigenes Bild / GIF (optional)</label><input id="fMedia" placeholder="https://…/bild.gif oder .png"></div>
<button class="btn" onclick="saveExercise()">Übung speichern</button></div>`)
window.saveExercise=()=>{const name=$('#fName').value.trim();if(!name)return toast('Bitte Namen eingeben');state.exercises.push({id:'u'+Date.now(),name,group:$('#fGroup').value||'Sonstiges',equipment:$('#fEq').value,load:$('#fLoad').value,target:$('#fTarget').value||'3 × 8–12',media:$('#fMedia').value.trim(),sideMode:$('#fSideMode')?.value||'auto',active:true,history:[]});save();closeModal();toast('Übung hinzugefügt ✅');showAllExercises()}
window.logExercise=id=>{
  const e=getExercise(id);if(!e)return;
  const ent=(state.activeWorkout&&state.activeWorkout.ids?.includes(id))?workoutEntry(id):null;
  const sets=ent?.sets||[];const unilateral=isUnilateralExercise(e), dumbbell=isDumbbellExercise(e);
  const setRows=sets.length?sets.map((x,i)=>`<div class="setrow"><b>Satz ${i+1}</b><span>${unilateral?`Links ${x.leftReps||'–'} · Rechts ${x.rightReps||'–'}`:`${x.reps||'–'} Wdh./Sek.`}</span><small>${x.weightPerDumbbell?`${formatKg(x.weightPerDumbbell)} je Hantel · ${x.dumbbellCount||1} Hantel${(x.dumbbellCount||1)>1?'n':''} · ${formatKg(x.weightPerDumbbell*(x.dumbbellCount||1))} gesamt`:x.load||'Körpergewicht'}${x.rpe?' · '+x.rpe:''}${x.minutes?` · ${x.minutes} Min.`:''}${x.kcal!=null?` · 🔥 ≈ ${x.kcal} kcal`:''}</small><button class="iconbtn" onclick="deleteSessionSet('${id}',${i})">✕</button></div>`).join(''):'<div class="empty small">Noch kein Satz gespeichert.</div>';
  modal(`<h2>${e.name}</h2>${exerciseIllustration(e,'large')}<div class="tiny visualhint">Jeden neuen Satz direkt speichern: Er bleibt erhalten und bringt einmal XP. Beim erneuten Öffnen werden alte Sätze nur angezeigt – ohne doppelte XP.</div>
  ${ent?`<div class="sessionlog"><div class="sectiontitle mini"><h3>Heutige Sätze</h3><span class="tag green">${sets.length}</span></div>${setRows}</div>`:''}
  <div class="formgrid">
  ${dumbbell?`<div class="field"><label>Gewicht pro Hantel (kg)</label><input id="lWeightEach" inputmode="decimal" value="${sets.at(-1)?.weightPerDumbbell??parseNum(e.load)??''}" placeholder="z. B. 20"><div class="tiny">Immer das Gewicht EINER Kurzhantel eintragen.</div></div><div class="field"><label>Wie viele Hanteln nutzt du?</label><select id="lDbCount"><option value="1" ${(sets.at(-1)?.dumbbellCount??defaultDumbbellCount(e))===1?'selected':''}>1 Hantel</option><option value="2" ${(sets.at(-1)?.dumbbellCount??defaultDumbbellCount(e))===2?'selected':''}>2 Hanteln</option></select></div>`:`<div class="field"><label>Gewicht / Band</label><input id="lLoad" value="${sets.at(-1)?.load??e.load??''}" placeholder="z. B. lila Band"></div>`}
  ${unilateral?`<div class="sidegrid"><div class="field"><label>Links – Wdh. / Sek.</label><input id="lLeft" inputmode="decimal" placeholder="z. B. 10"></div><div class="field"><label>Rechts – Wdh. / Sek.</label><input id="lRight" inputmode="decimal" placeholder="z. B. 10"></div></div>`:`<div class="field"><label>Wiederholungen / Sekunden dieses Satzes</label><input id="lReps" inputmode="decimal" placeholder="z. B. 12"></div>`}
  <div class="field"><label>Wie schwer war der Satz?</label><select id="lRpe"><option>leicht</option><option selected>passend</option><option>schwer</option><option>sehr schwer</option></select></div>
  <div class="field"><label>Dauer dieses Satzes (Min., optional)</label><input id="lMinutes" inputmode="decimal" value="" placeholder="leer = automatisch"><div class="tiny">Wenn leer, schätzt FitQuest die Belastungsdauer aus Wiederholungen bzw. Haltezeit.</div></div>
  <button class="btn block" onclick="saveSessionSet('${id}')">💾 Satz sofort speichern</button>
  ${ent?`<button class="btn secondary block" onclick="finishExercise('${id}')">${ent.completed?'✅ Übung abgeschlossen – weitere Sätze trotzdem möglich':'✅ Übung für heute abschließen'}</button>`:''}
  <div class="tiny">${dumbbell?'Beispiel: 20 kg pro Hantel × 2 = 40 kg Gesamtlast.':''} Kalorien bleiben eine Schätzung aus Körpergewicht, Übungstyp und Zeit/Intensität.</div>
  </div>`)
}
window.saveSessionSet=id=>{
  const e=getExercise(id);if(!e)return;const unilateral=isUnilateralExercise(e),dumbbell=isDumbbellExercise(e);
  const set={id:'set_'+Date.now()+'_'+Math.random().toString(36).slice(2,7),date:new Date().toISOString(),rpe:$('#lRpe')?.value||'passend'};
  if(unilateral){set.leftReps=$('#lLeft')?.value.trim()||'';set.rightReps=$('#lRight')?.value.trim()||'';if(!set.leftReps&&!set.rightReps)return toast('Links oder rechts Wiederholungen eintragen');}
  else{set.reps=$('#lReps')?.value.trim()||'';if(!set.reps)return toast('Wiederholungen oder Sekunden eintragen');}
  const enteredMinutes=parseFloat(String($('#lMinutes')?.value||'').replace(',','.'));
  set.minutes=Number.isFinite(enteredMinutes)&&enteredMinutes>0?enteredMinutes:autoSetMinutes(e,set);set.minutes=Math.round(set.minutes*100)/100;
  set.kcal=kcalEstimate(e,set.minutes,set.rpe);
  if(dumbbell){set.weightPerDumbbell=parseNum($('#lWeightEach')?.value);set.dumbbellCount=Number($('#lDbCount')?.value)||1;if(set.weightPerDumbbell!=null)e.load=`${String(set.weightPerDumbbell).replace('.',',')} kg pro Hantel`;}
  else{set.load=$('#lLoad')?.value.trim()||'';if(set.load)e.load=set.load;}
  // XP belongs to the NEW saved set, not to reopening an old one.
  // The flag is stored on the set itself so an existing set can never award XP twice.
  set.xpAwarded=true;
  if(set.kcal!=null)state.calorieLog.push({date:localDateKey(),type:'exercise',sourceId:set.id,exerciseId:id,label:e.name,kcal:set.kcal,minutes:set.minutes,rpe:set.rpe});
  if(state.activeWorkout&&state.activeWorkout.ids?.includes(id)){
    const ent=workoutEntry(id);ent.sets.push(set);if(ent.completed)syncCompletedExerciseHistory(id);save();addXp(10,`Satz ${ent.sets.length} gespeichert!`);logExercise(id);return;
  }
  e.history=e.history||[];e.history.push({date:set.date,reps:set.reps||`L ${set.leftReps} / R ${set.rightReps}`,load:e.load,rpe:set.rpe,setXpAwarded:true});save();addXp(10,'Satz gespeichert!');logExercise(id);
}
window.deleteSessionSet=(id,index)=>{const ent=workoutEntry(id);if(!ent?.sets?.[index])return;const removed=ent.sets[index];if(removed?.id)state.calorieLog=state.calorieLog.filter(x=>x.sourceId!==removed.id);ent.sets.splice(index,1);save();logExercise(id)}
window.finishExercise=id=>{
  const e=getExercise(id),ent=workoutEntry(id);if(!e||!ent)return;if(!ent.sets.length)return toast('Erst mindestens einen Satz speichern');
  const firstCompletion=!ent.completed;ent.completed=true;state.activeWorkout.done[id]=true;
  const prev=[...(e.history||[])];
  const num=v=>parseNum(v);const setRepMax=st=>Math.max(0,...[st.reps,st.leftReps,st.rightReps].map(num).filter(Number.isFinite));
  const repMax=Math.max(0,...ent.sets.map(setRepMax));const loadMax=Math.max(0,...ent.sets.map(st=>st.weightPerDumbbell??num(st.load)??0));
  const oldLoads=prev.map(h=>num(h.weightPerDumbbell??h.load)).filter(Number.isFinite), oldReps=prev.map(h=>Math.max(0,...String(h.reps||'').split(/[^0-9.,]+/).map(num).filter(Number.isFinite))).filter(Number.isFinite);
  const weightPR=loadMax>0&&(!oldLoads.length||loadMax>Math.max(...oldLoads));const repPR=repMax>0&&(!oldReps.length||repMax>Math.max(...oldReps));
  if(firstCompletion){
    const summary=ent.sets.map(st=>isUnilateralExercise(e)?`L${st.leftReps||'-'}/R${st.rightReps||'-'}`:(st.reps||'-')).join(', ');
    const bestWeight=ent.sets.find(st=>st.weightPerDumbbell!=null)?.weightPerDumbbell;
    e.history=e.history||[];e.history.push({date:new Date().toISOString(),sessionDate:localDateKey(),reps:summary,load:bestWeight!=null?`${bestWeight} kg pro Hantel`:e.load,weightPerDumbbell:bestWeight,sets:structuredClone(ent.sets)});
    state.activityLog.push({date:localDateKey(),type:'exercise',label:e.name});
  }
  const exerciseKcal=exerciseSessionKcal(id);const exerciseMinutes=Math.round(ent.sets.reduce((a,st)=>a+(Number(st.minutes)||0),0)*10)/10;
  save();closeModal();
  // Satz-XP wurden bereits beim Speichern jedes neuen Satzes vergeben.
  // Beim Abschließen gibt es daher keine normalen XP noch einmal. Ein echter PR bleibt ein Bonus.
  if(firstCompletion&&(weightPR||repPR))addXp(25,`🏆 Neuer ${weightPR?'Gewichts-':'Wiederholungs-'}PR!`);
  if(currentView==='training'){state.activeWorkout?.mode==='custom'?renderCustomWorkout():showDailyTraining()}
  setTimeout(()=>modal(`<div class="celebrate">🔥</div><h2>${e.name} abgeschlossen</h2><div class="hero kcalhero"><div class="muted">GESCHÄTZTER VERBRAUCH DIESER ÜBUNG</div><div class="kpi">${bodyWeight()?`≈ ${exerciseKcal} kcal*`:'Körpergewicht fehlt'}</div><div class="muted">${ent.sets.length} Sätze · ca. ${exerciseMinutes} Min. Belastungszeit</div></div>${!bodyWeight()?`<div class="notice">Bitte unter ⚙️ Einstellungen deine Körperdaten ergänzen. Ohne Körpergewicht kann FitQuest keine brauchbare Aktivitätskalorien-Schätzung bilden.</div>`:''}<div class="tiny">* Modellschätzung aus Körpergewicht, Übungstyp, Belastungsdauer und Intensität; keine Messung.</div><button class="btn block" onclick="closeModal()">Weiter trainieren</button>`),30);
}
window.completeWorkout=(mode='daily')=>{const ids=state.activeWorkout?.ids||[];const done=ids.filter(sessionDone).length;if(ids.length&&done<Math.ceil(ids.length/2)&&!confirm(`Erst ${done}/${ids.length} Übungen abgehakt. Training trotzdem abschließen?`))return;const workoutKcal=currentWorkoutKcal(),workoutMinutes=currentWorkoutMinutes(),title=state.activeWorkout?.title||'Training';state.workouts++;state.activityLog.push({date:localDateKey(),type:'workout',label:title});if(mode==='daily'){state.planRotation=((state.planRotation||0)+1)%dailyPlans.length;state.lastDailyCompletedDate=localDateKey()}state.activeWorkout=null;save();const gotQuest=completeQuest('train',250,'Daily Training geschafft!');if(!gotQuest){addXp(50,'Workout abgeschlossen!')}home();setTimeout(()=>modal(`<div class="celebrate">🏁</div><h2>${title} abgeschlossen</h2><div class="hero kcalhero"><div class="muted">GESCHÄTZTER TRAININGSVERBRAUCH</div><div class="kpi">${bodyWeight()?`≈ ${workoutKcal} kcal*`:'Körpergewicht fehlt'}</div><div class="muted">${done}/${ids.length} Übungen abgeschlossen · ca. ${workoutMinutes} Min. erfasste Belastungszeit</div></div>${!bodyWeight()?`<div class="notice">Ergänze unter ⚙️ Einstellungen dein Körpergewicht. Größe, Alter und Geschlecht werden ebenfalls als Profildaten gespeichert.</div>`:''}<div class="tiny">* Aktivitätskalorien-Schätzung. Sie ist kein Messwert und enthält nicht deinen Grundumsatz.</div><button class="btn block" onclick="closeModal()">Fertig</button>`),80)}
function showCalories(){
  ensureDailyReset();
  const kg=bodyWeight(), exK=exerciseCaloriesForDate(), stepK=todayStepKcal()||0, total=exK+stepK, week=calorieWeek();
  const logs=state.calorieLog.filter(x=>x.date===localDateKey()&&x.type==='exercise');
  view.innerHTML=`${trainingTabs('calories')}
  <div class="sectiontitle"><h2>🔥 Kalorien</h2><span class="tag yellow">geschätzt</span></div>
  <div class="hero kcalhero"><div class="muted">AKTIVITÄT HEUTE</div><div class="kpi">≈ ${total} kcal</div><div class="kcalbreak"><span>🏋️ Training <b>≈ ${exK}</b></span><span>👟 Schritte <b>≈ ${stepK}</b></span></div><div class="tiny">Nicht enthalten: Grundumsatz und sonstiger Tagesverbrauch.</div></div>
  ${!kg?`<div class="notice">Für Kalorienschätzungen fehlt dein Körpergewicht. <button class="btn small" onclick="settings()">Jetzt eintragen</button></div>`:''}
  <div class="sectiontitle"><h2>🧮 Rechner</h2><span class="muted">zum Ausprobieren</span></div>
  <div class="card formgrid">
    <div class="field"><label>Übung</label><select id="calExercise">${state.exercises.map(e=>`<option value="${e.id}">${e.name}</option>`).join('')}</select></div>
    <div class="grid calcgrid"><div class="field"><label>Dauer (Min.)</label><input id="calMinutes" inputmode="decimal" value="10"></div><div class="field"><label>Intensität</label><select id="calRpe"><option>leicht</option><option selected>passend</option><option>schwer</option><option>sehr schwer</option></select></div></div>
    <button class="btn block" onclick="calcCaloriesPreview()">Berechnen</button>
    <div id="calPreview" class="calcresult">${kg?'Werte eingeben und berechnen.':'Zuerst Körpergewicht in ⚙️ Einstellungen eintragen.'}</div>
    <div class="tiny">Die Last in kg fließt nicht linear in kcal ein. Für Krafttraining bestimmen vor allem Körpergewicht, Übungsart, Dauer und Intensität die grobe Schätzung.</div>
  </div>
  <div class="sectiontitle"><h2>🏋️ Heute nach Übungen</h2><span class="muted">gespeicherte Sätze</span></div>
  ${logs.length?`<div class="card kcal-list">${logs.map(x=>`<div class="kcalitem"><div><b>${x.label}</b><small>${x.minutes||'–'} Min. · ${x.rpe||'–'}</small></div><strong>≈ ${x.kcal} kcal</strong></div>`).join('')}</div>`:'<div class="empty">Heute noch keine Sätze mit Kalorienschätzung gespeichert.</div>'}
  <div class="sectiontitle"><h2>📅 Wochenübersicht</h2></div><div class="card kcalweek">${week.map(d=>`<div class="kcalday ${d.key===localDateKey()?'today':''}"><b>${d.label}</b><span>≈ ${d.total} kcal</span><small>🏋️ ${d.exercise} · 👟 ${d.steps}</small></div>`).join('')}</div>
  <div class="notice">Kalorien sind Modellschätzungen, keine Messwerte. Sie eignen sich eher für Trends als für exaktes "Zurückessen" verbrauchter Kalorien.</div>`;
}
window.showCalories=showCalories;
window.calcCaloriesPreview=()=>{const e=getExercise($('#calExercise')?.value),m=$('#calMinutes')?.value,r=$('#calRpe')?.value||'passend',out=$('#calPreview');if(!bodyWeight()){out.innerHTML='⚠️ Bitte zuerst Körpergewicht in den Einstellungen eintragen.';return;}const k=kcalEstimate(e,m,r);out.innerHTML=k==null?'Bitte gültige Dauer eingeben.':`<b>≈ ${k} kcal</b><span>${e.name} · ${m} Min. · ${r}</span><small>MET ≈ ${exerciseMET(e,r).toFixed(1)}</small>`};
function skillsView(filter='Alle'){const fams=['Alle',...new Set(skills.map(s=>s.family))];view.innerHTML=`<div class="sectiontitle"><h2>🗺️ Skill-Welt</h2><span class="tag yellow">RPG-Modus</span></div><div class="tabs">${fams.map(f=>`<button class="tab ${f===filter?'active':''}" onclick="skillsView('${f}')">${f}</button>`).join('')}</div><div class="skillmap">${skills.filter(s=>filter==='Alle'||s.family===filter).map(skillCard).join('')}</div>`}
function skillCard(s){const p=state.skillProgress[s.id]??0,win=!!state.bossWins[s.id];return `<div class="skill ${win?'mastered':''}"><span class="badge">${win?'🏆':'⚔️'}</span><div class="muted">${s.family}</div><h3>${s.icon} ${s.name}</h3><div>${win?'Boss besiegt':`Stufe ${Math.min(p+1,s.steps.length)}/${s.steps.length}: ${s.steps[Math.min(p,s.steps.length-1)]}`}</div><div class="skillbar"><i style="width:${pct(p,s.steps.length)}%"></i></div><button class="btn secondary" style="margin-top:10px" onclick="openSkill('${s.id}')">${p?'Weitertrainieren':'Einstufen'}</button></div>`}
window.skillsView=skillsView;
window.openSkill=id=>{const s=skills.find(x=>x.id===id),p=state.skillProgress[id]??0,plan=planForSkill(s),goal=!!state.skillGoals[id],win=!!state.bossWins[id];if(win)return modal(`<div class="celebrate">🏆</div><h2>${s.name}</h2><p>Boss <b>${s.boss}</b> wurde besiegt.</p>`);if(p>=s.steps.length)return bossFight(id);modal(`<div class="skillhero">${exerciseIllustration({name:s.name,group:s.family,equipment:'Körpergewicht'},'large')}<div><div class="muted">${s.family} · Stufe ${p+1}/${s.steps.length}</div><h2>${s.name}</h2><p>${plan.intro}</p></div></div><a class="btn secondary block" href="${plan.source}" target="_blank" rel="noopener">▶ Skill ansehen</a><div class="skillpath">${s.steps.map((st,i)=>`<div class="pathnode ${i<p?'done':i===p?'current':'locked'}"><span>${i<p?'✓':i+1}</span><small>${st}</small></div>`).join('<b class="pathline">→</b>')}</div><div class="card innercard"><div class="muted">AKTUELLE STUFE</div><h3>${s.steps[p]}</h3><p><b>Aufstiegskriterium:</b> ${plan.gate}</p><p class="muted">Kannst du die aktuelle Stufe sauber, kontrolliert und reproduzierbar?</p><div class="grid"><button class="btn danger" onclick="skillNo('${id}')">❌ Nein</button><button class="btn" onclick="skillGate('${id}')">✅ Ja – Leistung prüfen</button></div></div>${goal?`<button class="btn warn block" onclick="startSkillPlan('${id}')">🎯 Heute dafür trainieren</button>`:''}`)}
window.skillNo=id=>{state.skillGoals[id]=true;save();modal(`<div class="celebrate">🎯</div><h2>Ziel gesetzt</h2><p>Wir trainieren die nötigen Vorstufen. Erst ein sauber erfülltes Leistungskriterium schaltet die nächste Stufe frei.</p><button class="btn block" onclick="startSkillPlan('${id}')">🔥 Heute anfangen</button>`)}
window.skillGate=id=>{const s=skills.find(x=>x.id===id),plan=planForSkill(s);modal(`<div class="celebrate">🧪</div><h2>Level-Test: ${s.name}</h2><p>Erforderlich: <b>${plan.gate}</b></p><p class="muted">Nur bestätigen, wenn du das ohne Schmerz und mit sauberer Technik reproduzierbar geschafft hast.</p><button class="btn block" onclick="confirmSkillGate('${id}')">✅ Kriterium sauber erfüllt</button><button class="btn secondary block" style="margin-top:8px" onclick="startSkillPlan('${id}')">Noch trainieren</button>`)}
window.confirmSkillGate=id=>{const s=skills.find(x=>x.id===id);state.skillEvidence[id]=(state.skillEvidence[id]||0)+1;state.skillProgress[id]=Math.min((state.skillProgress[id]||0)+1,s.steps.length);save();closeModal();completeQuest('skill',120,'Skill-Quest geschafft!');addXp(75,'Skill-Stufe freigeschaltet!');if(state.skillProgress[id]>=s.steps.length)bossFight(id);else openSkill(id)}
window.startSkillPlan=id=>{const s=skills.find(x=>x.id===id),plan=planForSkill(s),count=state.skillSessions[id]||0;closeModal();view.innerHTML=`<div class="sectiontitle"><h2>${s.icon} ${s.name}</h2><span class="tag yellow">Skill-Training</span></div><div class="notice">Ziel: sauber trainieren, nicht erzwingen. Schmerz = abbrechen. Aufstieg erst nach bestandenem Leistungstest.</div><div class="card" style="margin-top:12px"><div class="muted">HEUTIGE VORBEREITUNG</div><h3>${s.name} · Einheit ${count+1}</h3><div class="list">${plan.drills.map((d,i)=>`<div class="exercise skilldrill visualrow">${exerciseIllustration({name:d.name,group:s.family,equipment:'Körpergewicht'})}<label style="display:flex;gap:10px;align-items:flex-start;flex:1"><input type="checkbox" class="skillcheck"><div><div class="name">${i+1}. ${d.name}</div><div class="muted">${d.dose}</div><div class="tiny">🎯 Warum: ${plan.intro}</div><div class="tiny">💡 ${d.cue}</div><div class="tiny">⚠️ ${d.error}</div><a href="${d.video}" target="_blank" rel="noopener">▶ Video/Hilfe</a></div></label></div>`).join('')}</div><div class="notice"><b>Nächstes Level:</b> ${plan.gate}</div><button class="btn block" style="margin-top:12px" onclick="finishSkillSession('${id}')">✅ Training abschließen</button><button class="btn secondary block" style="margin-top:8px" onclick="skillGate('${id}')">🧪 Level-Test starten</button></div>`}
window.finishSkillSession=id=>{const boxes=[...document.querySelectorAll('.skillcheck')];if(boxes.some(x=>!x.checked)&&!confirm('Noch nicht alle Übungen abgehakt. Trotzdem abschließen?'))return;state.skillSessions[id]=(state.skillSessions[id]||0)+1;state.activityLog.push({date:localDateKey(),type:'skill',label:skills.find(x=>x.id===id)?.name||'Skill'});save();completeQuest('skill',120,'Skill-Quest geschafft!');addXp(40,'Skill-Training erledigt!');modal(`<div class="celebrate">🔥</div><h2>Geil gemacht!</h2><p>Einheit ${state.skillSessions[id]} abgeschlossen.</p><p class="muted">Kein automatischer Level-Up: Wenn du das Kriterium sicher erfüllst, starte den Level-Test.</p><button class="btn block" onclick="closeModal();openSkill('${id}')">Weiter</button>`)}
window.bossFight=id=>{const s=skills.find(x=>x.id===id),plan=planForSkill(s);modal(`<div class="celebrate">👹</div><h2>BOSSFIGHT: ${s.boss}</h2><p><b>${s.name}</b> – jetzt zählt der Zielskill selbst.</p><div class="bosstimer" id="bossTimer">00:00.0</div><div class="custom-actions"><button class="btn" onclick="startBossTimer()">▶ Timer</button><button class="btn secondary" onclick="stopBossTimer()">⏸ Stop</button></div><p class="muted">Vorbereitung abgeschlossen. Führe den vollständigen Skill sauber und kontrolliert aus.</p><a class="btn secondary block" href="${plan.source}" target="_blank" rel="noopener">▶ Technik vorher ansehen</a><button class="btn block" style="margin-top:8px" onclick="winBoss('${id}')">⚔️ Boss sauber besiegt</button><button class="btn secondary block" style="margin-top:8px" onclick="startSkillPlan('${id}')">Noch nicht – weitertrainieren</button>`)}
let bossClock=null,bossStarted=0;
window.startBossTimer=()=>{bossStarted=performance.now();clearInterval(bossClock);bossClock=setInterval(()=>{const t=performance.now()-bossStarted,m=Math.floor(t/60000),sec=Math.floor((t%60000)/1000),d=Math.floor((t%1000)/100);const el=$('#bossTimer');if(el)el.textContent=`${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}.${d}`},100)}
window.stopBossTimer=()=>{clearInterval(bossClock);bossClock=null}
window.winBoss=id=>{const s=skills.find(x=>x.id===id);state.bossWins[id]=new Date().toISOString();state.activityLog.push({date:localDateKey(),type:'boss',label:`${s.name} gemeistert`});save();closeModal();addXp(750,`BOSS BESIEGT: ${s.boss}!`);modal(`<div class="celebrate">🏆</div><h2>${s.name} GEMEISTERT!</h2><p>🔥 Geil gemacht. <b>${s.boss}</b> ist besiegt.</p><p>+750 XP · Trophäe freigeschaltet</p><button class="btn block" onclick="closeModal();skillsView()">Zur Skill-Welt</button>`)}

function body(){view.innerHTML=`<div class="sectiontitle"><h2>📷 KI-Körpercheck</h2><span class="tag yellow">Beta</span></div><div class="notice">Diese lokale PWA kann Fotos bereits aufnehmen und speichern. Eine belastbare KI-Auswertung ist in dieser Version bewusst noch nicht aktiviert – dafür braucht die App ein Bildanalyse-Backend. Keine medizinischen Diagnosen.</div><div class="card" style="margin-top:12px"><h3>1. Entspannt</h3><div class="photozone"><input type="file" accept="image/*" capture="environment" onchange="previewPhoto(event,'relaxed')"><div class="muted">Vorne · hinten · seitlich, gleiches Licht und gleicher Abstand</div><div id="relaxedPreview"></div></div></div><div class="card" style="margin-top:12px"><h3>2. Angespannt</h3><div class="photozone"><input type="file" accept="image/*" capture="environment" onchange="previewPhoto(event,'flexed')"><div class="muted">Standardisierte Pose für Vergleichbarkeit</div><div id="flexedPreview"></div></div></div><div class="card" style="margin-top:12px"><h3>Geplante KI-Auswertung</h3><p class="muted">Symmetrie · sichtbare Proportionen · Körperhaltung · Links/Rechts-Vergleich · Verbindung mit unilateralem Leistungstest · passende Übungsvorschläge.</p><button class="btn secondary block" onclick="toast('KI-Modul bleibt für die nächste Backend-Stufe vorbereitet.')">Analyse starten</button></div>`}
window.previewPhoto=(ev,type)=>{const f=ev.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{document.getElementById(type+'Preview').innerHTML=`<img src="${r.result}" alt="Körperfoto">`;toast('Foto lokal geladen 📷')};r.readAsDataURL(f)}
function progress(){const mastered=skills.filter(s=>(state.skillProgress[s.id]??0)>=s.steps.length),week=recentWeek(),todayKcal=state.calorieLog.filter(x=>x.date===localDateKey()).reduce((a,x)=>a+(x.kcal||0),0)+(todayStepKcal()||0);view.innerHTML=`<div class="sectiontitle"><h2>🏆 Fortschritt</h2><span class="tag green">Level ${state.level}</span></div><div class="hero"><div class="kpi">${state.xp} XP</div><div class="muted">Heute grob geschätzt: ${todayKcal} kcal Aktivität*</div><div class="tiny">* MET-/Schritt-Schätzung, kein Messwert.</div></div><div class="sectiontitle"><h2>📅 Diese Woche</h2></div><div class="weekgrid">${week.map(d=>`<div class="daycard ${d.key===localDateKey()?'today':''}"><b>${d.label}</b><span>${d.items.filter(x=>x.type==='workout').length?'🏋️':''}${d.items.filter(x=>x.type==='boss').length?'🏆':''}</span><small>${d.steps?d.steps.toLocaleString('de-DE')+' 👟':'–'}</small></div>`).join('')}</div><div class="sectiontitle"><h2>Boss-Trophäen</h2></div>${mastered.length?mastered.map(s=>`<div class="exercise"><div><div class="name">🏆 ${s.boss}</div><div class="muted">${s.name} gemeistert</div></div><span>⚡ +750</span></div>`).join(''):'<div class="empty">Noch kein Boss besiegt. Dein erster wartet schon.</div>'}<div class="sectiontitle"><h2>Shadow You</h2></div><div class="boss"><div class="bossicon">🌑</div><h2>Dein früheres Ich</h2><p class="muted">FitQuest sammelt Bestleistungen und kann daraus später persönliche Bossfights bilden. Aktueller Spider-Man-Rekord: ${state.records.spiderman} Runden.</p></div>`}
function settings(){modal(`<h2>⚙️ Einstellungen</h2><div class="formgrid"><h3>👤 Körperdaten</h3><div class="grid"><div class="field"><label>Gewicht (kg)</label><input id="bodyWeightKg" inputmode="decimal" value="${state.settings.bodyWeightKg||''}" placeholder="z. B. 78"></div><div class="field"><label>Größe (cm)</label><input id="bodyHeightCm" inputmode="numeric" value="${state.settings.bodyHeightCm||''}" placeholder="z. B. 175"></div></div><div class="grid"><div class="field"><label>Alter</label><input id="age" inputmode="numeric" value="${state.settings.age||''}" placeholder="z. B. 38"></div><div class="field"><label>Geschlecht</label><select id="sex"><option value="" ${!state.settings.sex?'selected':''}>Keine Angabe</option><option value="male" ${state.settings.sex==='male'?'selected':''}>männlich</option><option value="female" ${state.settings.sex==='female'?'selected':''}>weiblich</option><option value="other" ${state.settings.sex==='other'?'selected':''}>divers / andere</option></select></div></div><div class="tiny">Für die Aktivitätskalorien beim Krafttraining ist vor allem dein Körpergewicht relevant. Größe, Alter und Geschlecht werden als Profildaten gespeichert und können später z. B. für Grundumsatz-/Tagesbedarfsfunktionen genutzt werden.</div><div class="field"><label>Schrittlänge (m)</label><input id="strideM" inputmode="decimal" value="${state.settings.strideM||0.75}"></div><div class="field"><label>Coach-Stil</label><select id="coachTone"><option ${state.settings.coachTone==='motivierend'?'selected':''}>motivierend</option><option>ruhig</option><option>knallhart</option></select></div><h3>Equipment</h3>${Object.entries({pullup:'Klimmzugstange',bench:'Kurzhantelbank',dumbbell:'Kurzhanteln',bands:'Reverse-/Widerstandsbänder',rack:'Rack',barbell:'Langhantel',rings:'Ringe',dips:'Dip-Barren'}).map(([k,n])=>`<label class="exercise"><span>${n}</span><input type="checkbox" id="eq_${k}" ${state.equipment[k]?'checked':''}></label>`).join('')}<div class="field"><label>Spielmodus</label><select id="gameMode"><option value="on" ${state.settings.gameMode?'selected':''}>An – XP, Quests, Bosse</option><option value="off" ${!state.settings.gameMode?'selected':''}>Aus – sachlich</option></select></div><button class="btn" onclick="saveSettings()">Speichern</button><button class="btn secondary" onclick="requestNotify()">🔔 22-Uhr-App-Benachrichtigung erlauben</button><div class="tiny">Hinweis: Eine reine PWA kann eine exakte 22-Uhr-Meldung bei vollständig geschlossener App nicht auf jedem Android-Gerät zuverlässig garantieren.</div><button class="btn danger" onclick="resetApp()">App zurücksetzen</button></div>`)}
window.saveSettings=()=>{state.settings.bodyWeightKg=$('#bodyWeightKg').value;state.settings.bodyHeightCm=$('#bodyHeightCm')?.value||'';state.settings.age=$('#age')?.value||'';state.settings.sex=$('#sex')?.value||'';state.settings.strideM=parseFloat(String($('#strideM').value).replace(',','.'))||0.75;state.settings.coachTone=$('#coachTone').value;state.settings.gameMode=$('#gameMode').value==='on';for(const k of Object.keys(state.equipment))state.equipment[k]=$('#eq_'+k).checked;save();closeModal();toast('Einstellungen gespeichert ✅')}
window.requestNotify=async()=>{if(!('Notification'in window))return toast('Browser unterstützt das nicht');const p=await Notification.requestPermission();state.settings.reminders=p==='granted';save();toast(p==='granted'?'22-Uhr-App-Erinnerung aktiviert 🔔':'Nicht erlaubt')}
window.resetApp=()=>{if(confirm('Wirklich alle lokalen App-Daten löschen?')){localStorage.removeItem('fitquest-state');state=structuredClone(defaults);ensureDailyReset();closeModal();home()}}
function modal(html){$('#modalBody').innerHTML=html;$('#modal').classList.remove('hidden')}
function closeModal(){$('#modal').classList.add('hidden')};window.closeModal=closeModal;
function go(v){currentView=v;header();if(v==='home')home();if(v==='training')training();if(v==='skills')skillsView();if(v==='body')body();if(v==='progress')progress()};window.go=go;
document.querySelectorAll('.bottomnav button').forEach(b=>b.onclick=()=>go(b.dataset.view));$('#closeModal').onclick=closeModal;$('#settingsBtn').onclick=settings;
$('#todayLabel').textContent=new Intl.DateTimeFormat('de-DE',{weekday:'long',day:'2-digit',month:'2-digit'}).format(new Date());
ensureDailyReset();scheduleMidnightReset();scheduleStepReminder();
if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
go('home');
