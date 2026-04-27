import {
  ThermometerSun,
  Droplets,
  Wind,
  Brain,
  Pill,
  Stethoscope,
  Eye,
  Ear,
  Zap,
  Heart,
  Moon,
  Frown,
  type LucideIcon,
} from "lucide-react"

export type Remedy = {
  slug: string
  title: string
  shortDescription: string
  icon: LucideIcon
  category: string
  overview: string
  homeRemedies: {
    title: string
    description: string
  }[]
  whatToAvoid: string[]
  whenToSeekCare: string[]
  relatedRemedies: string[]
}

export const remedies: Remedy[] = [
  {
    slug: "common-cold",
    title: "Common Cold",
    shortDescription: "Relief strategies for cold symptoms including runny nose, sneezing, and mild fatigue.",
    icon: ThermometerSun,
    category: "Respiratory",
    overview: "The common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold. Most people recover from a common cold in 7 to 10 days.",
    homeRemedies: [
      {
        title: "Stay Hydrated",
        description: "Water, juice, clear broth, or warm lemon water with honey helps loosen congestion and prevents dehydration. Avoid alcohol, coffee, and caffeinated sodas, which can make dehydration worse."
      },
      {
        title: "Rest",
        description: "Your body needs energy to fight infection. Get plenty of sleep and reduce your activity level to give your immune system the resources it needs."
      },
      {
        title: "Soothe a Sore Throat",
        description: "A saltwater gargle (1/4 to 1/2 teaspoon salt in 8 ounces of warm water) can temporarily relieve a sore or scratchy throat."
      },
      {
        title: "Use a Humidifier",
        description: "A cool-mist humidifier or vaporizer can add moisture to the air, which may help ease congestion. Change the water daily and clean the unit regularly."
      },
      {
        title: "Try Honey",
        description: "Honey may help soothe coughs in adults and children over age 1. Try it in hot tea or warm water with lemon."
      }
    ],
    whatToAvoid: [
      "Antibiotics (they don't work against viruses)",
      "Over-exertion and intense exercise",
      "Alcohol and caffeine (can cause dehydration)",
      "Smoking or secondhand smoke exposure",
      "Giving honey to children under 1 year old"
    ],
    whenToSeekCare: [
      "Symptoms last more than 10 days without improvement",
      "Fever higher than 101.3°F (38.5°C) that lasts more than 3 days",
      "Fever returns after a fever-free period",
      "Shortness of breath or difficulty breathing",
      "Severe sore throat, headache, or sinus pain",
      "Symptoms worsen or new symptoms appear"
    ],
    relatedRemedies: ["sore-throat", "clogged-nose", "headache"]
  },
  {
    slug: "clogged-nose",
    title: "Clogged Nose",
    shortDescription: "Natural ways to relieve nasal congestion and breathe easier.",
    icon: Droplets,
    category: "Respiratory",
    overview: "Nasal congestion occurs when the tissues lining the nose become swollen due to inflamed blood vessels. It can make it difficult to breathe through your nose and may be accompanied by mucus discharge. While uncomfortable, nasal congestion is rarely serious in adults.",
    homeRemedies: [
      {
        title: "Steam Inhalation",
        description: "Breathe in steam from a bowl of hot water (carefully!) or take a hot shower. The warm, moist air helps thin the mucus and reduce inflammation."
      },
      {
        title: "Saline Nasal Spray",
        description: "A saline (saltwater) spray can help moisten dry nasal passages and thin mucus. You can buy it over-the-counter or make your own with distilled water."
      },
      {
        title: "Stay Hydrated",
        description: "Drinking plenty of fluids helps thin the mucus in your nasal passages, making it easier to drain and reducing pressure in your sinuses."
      },
      {
        title: "Use a Humidifier",
        description: "Adding moisture to the air can help keep your nasal passages from drying out. Clean your humidifier regularly to prevent mold growth."
      },
      {
        title: "Elevate Your Head",
        description: "When lying down, prop your head up with extra pillows. This helps mucus drain from your nasal passages."
      },
      {
        title: "Warm Compress",
        description: "Place a warm, wet towel over your face. This can help relieve the pressure and pain of congestion."
      }
    ],
    whatToAvoid: [
      "Overusing decongestant nasal sprays (can cause rebound congestion)",
      "Dry environments without humidity",
      "Known allergens and irritants",
      "Blowing your nose too hard",
      "Swimming in chlorinated pools when congested"
    ],
    whenToSeekCare: [
      "Congestion lasts more than 10 days",
      "High fever (above 102°F or 38.9°C)",
      "Green or yellow nasal discharge with sinus pain or fever",
      "Nasal congestion after a head injury",
      "Blood in your nasal discharge",
      "Congestion only on one side (may indicate a structural issue)"
    ],
    relatedRemedies: ["common-cold", "sore-throat", "headache"]
  },
  {
    slug: "sore-throat",
    title: "Sore Throat",
    shortDescription: "Soothing remedies for throat pain and irritation.",
    icon: Wind,
    category: "Respiratory",
    overview: "A sore throat is pain, scratchiness, or irritation of the throat that often worsens when you swallow. The most common cause is a viral infection, like a cold or the flu. A sore throat caused by a virus resolves on its own with self-care.",
    homeRemedies: [
      {
        title: "Salt Water Gargle",
        description: "Gargle with warm salt water (1/4 to 1/2 teaspoon salt dissolved in 8 ounces of warm water) several times a day. This can help reduce swelling and loosen mucus."
      },
      {
        title: "Honey and Warm Liquids",
        description: "Honey has natural antibacterial properties and can coat and soothe the throat. Mix it with warm water, tea, or lemon. Note: Never give honey to children under 1 year."
      },
      {
        title: "Stay Hydrated",
        description: "Drink plenty of warm fluids like broth, caffeine-free tea, or warm water with honey. This keeps the throat moist and prevents dehydration."
      },
      {
        title: "Use a Humidifier",
        description: "Dry air can irritate a sore throat. Use a cool-air humidifier to add moisture to your home, especially your bedroom."
      },
      {
        title: "Rest Your Voice",
        description: "Talking can further irritate an inflamed throat. Try to rest your voice as much as possible. Avoid whispering, as it can strain your throat even more."
      },
      {
        title: "Throat Lozenges or Hard Candy",
        description: "Sucking on lozenges or hard candy can help keep your throat moist and provide temporary relief. Avoid giving to young children due to choking risk."
      }
    ],
    whatToAvoid: [
      "Very hot or cold foods and beverages",
      "Acidic foods and drinks (citrus, tomatoes)",
      "Spicy foods",
      "Smoking and secondhand smoke",
      "Whispering (strains the throat more than talking softly)"
    ],
    whenToSeekCare: [
      "Sore throat lasts longer than a week",
      "Difficulty breathing or swallowing",
      "Difficulty opening your mouth",
      "High fever (above 101°F or 38.3°C)",
      "Blood in saliva or phlegm",
      "White patches or pus on your tonsils",
      "Recurring sore throats",
      "Joint pain or earache"
    ],
    relatedRemedies: ["common-cold", "clogged-nose", "headache"]
  },
  {
    slug: "headache",
    title: "Headache",
    shortDescription: "Natural approaches to relieve tension and common headaches.",
    icon: Brain,
    category: "Pain Management",
    overview: "Headaches are one of the most common pain conditions. Most headaches aren't the result of a serious illness, but some may result from a life-threatening condition requiring emergency care. Tension-type headaches are the most common form.",
    homeRemedies: [
      {
        title: "Hydrate",
        description: "Dehydration can trigger headaches. Drink a full glass of water at the first sign of a headache and continue to drink small amounts throughout the day."
      },
      {
        title: "Rest in a Quiet, Dark Room",
        description: "Light and noise can make headaches worse, especially migraines. Rest in a quiet, dark room with your eyes closed."
      },
      {
        title: "Cold or Warm Compress",
        description: "Apply a cold pack to your forehead for 15 minutes, then take a 15-minute break. For tension headaches, a warm compress on the back of your neck may help."
      },
      {
        title: "Massage",
        description: "Gently massage your temples, scalp, neck, and shoulders. This can help relieve tension that might be causing your headache."
      },
      {
        title: "Caffeine (in moderation)",
        description: "A small amount of caffeine can help relieve headache pain and enhance the effectiveness of pain relievers. However, too much can cause withdrawal headaches."
      },
      {
        title: "Practice Relaxation Techniques",
        description: "Deep breathing, meditation, or progressive muscle relaxation can help ease tension headaches."
      }
    ],
    whatToAvoid: [
      "Bright lights and loud noises",
      "Excessive caffeine or caffeine withdrawal",
      "Skipping meals",
      "Poor posture (especially when working at a computer)",
      "Excessive alcohol consumption",
      "Lack of sleep or too much sleep"
    ],
    whenToSeekCare: [
      "Sudden, severe headache (thunderclap headache)",
      "Headache with fever, stiff neck, confusion, or seizures",
      "Headache after a head injury",
      "Chronic headaches that worsen progressively",
      "Headache with vision changes, speech difficulty, or weakness",
      "Headaches that interfere with daily activities"
    ],
    relatedRemedies: ["stress-anxiety", "sleep-issues", "common-cold"]
  },
  {
    slug: "upset-stomach",
    title: "Upset Stomach",
    shortDescription: "Gentle remedies for nausea, indigestion, and stomach discomfort.",
    icon: Pill,
    category: "Digestive",
    overview: "An upset stomach can include nausea, bloating, indigestion, or general abdominal discomfort. Most cases are not serious and resolve on their own. Common causes include overeating, eating too quickly, fatty or spicy foods, stress, and mild infections.",
    homeRemedies: [
      {
        title: "Ginger",
        description: "Ginger has natural anti-nausea properties. Try ginger tea, ginger ale (with real ginger), or ginger candies. Fresh ginger can also be added to hot water."
      },
      {
        title: "Peppermint",
        description: "Peppermint can help relax stomach muscles and improve bile flow. Try peppermint tea or sucking on peppermint candies. Avoid if you have acid reflux."
      },
      {
        title: "BRAT Diet",
        description: "When your stomach is upset, try bland, easy-to-digest foods: Bananas, Rice, Applesauce, and Toast. These can help firm up stools and are gentle on the stomach."
      },
      {
        title: "Stay Hydrated",
        description: "Sip clear fluids like water, clear broth, or electrolyte drinks. Take small, frequent sips rather than large amounts at once."
      },
      {
        title: "Apply Heat",
        description: "A heating pad or warm water bottle on your abdomen can help relax tense muscles and relieve cramping."
      },
      {
        title: "Avoid Lying Flat",
        description: "If you have nausea or acid reflux, keep your head elevated. Lying flat can worsen symptoms."
      }
    ],
    whatToAvoid: [
      "Fatty, greasy, or fried foods",
      "Spicy foods",
      "Caffeine and alcohol",
      "Dairy products (temporarily)",
      "Large meals",
      "Lying down immediately after eating"
    ],
    whenToSeekCare: [
      "Severe or persistent abdominal pain",
      "Blood in vomit or stool",
      "Signs of dehydration (dark urine, dizziness, dry mouth)",
      "Fever above 101.5°F (38.6°C)",
      "Symptoms lasting more than 48 hours",
      "Inability to keep fluids down for 24 hours"
    ],
    relatedRemedies: ["stress-anxiety", "headache"]
  },
  {
    slug: "minor-cuts",
    title: "Minor Cuts & Scrapes",
    shortDescription: "Proper care for small wounds to promote healing and prevent infection.",
    icon: Stethoscope,
    category: "First Aid",
    overview: "Minor cuts and scrapes are common injuries that usually don't require emergency medical care. However, proper wound care is essential to prevent infection and promote healing. Most minor wounds heal within a week or two.",
    homeRemedies: [
      {
        title: "Stop the Bleeding",
        description: "Apply gentle pressure with a clean cloth or bandage. Most minor cuts stop bleeding on their own within a few minutes. Keep pressure on for 20-30 minutes without peeking."
      },
      {
        title: "Clean the Wound",
        description: "Rinse the wound under clean, running water to remove dirt and debris. Gently clean around the wound with soap, but try to keep soap out of the wound itself."
      },
      {
        title: "Apply an Antibiotic Ointment",
        description: "A thin layer of antibiotic ointment or petroleum jelly can help keep the wound moist and may prevent infection. Stop using if a rash develops."
      },
      {
        title: "Cover the Wound",
        description: "Apply a clean bandage to keep the wound clean and protected. Change the bandage at least once a day or when it gets wet or dirty."
      },
      {
        title: "Keep It Moist",
        description: "Contrary to old beliefs, keeping a wound moist helps it heal faster and with less scarring than letting it dry out and scab."
      },
      {
        title: "Watch for Infection",
        description: "Check daily for signs of infection: increased redness, swelling, warmth, pain, or pus. Some redness is normal during healing."
      }
    ],
    whatToAvoid: [
      "Using hydrogen peroxide or alcohol directly on wounds (can damage tissue)",
      "Picking at scabs or the wound",
      "Using butterfly bandages on infected wounds",
      "Ignoring signs of infection",
      "Getting the wound dirty after cleaning"
    ],
    whenToSeekCare: [
      "Deep cuts that won't stop bleeding after 20 minutes of pressure",
      "Cuts with jagged edges or gaps that won't close",
      "Cuts on the face (may need stitches to minimize scarring)",
      "Signs of infection (increasing redness, swelling, pus, fever)",
      "Wounds caused by animal or human bites",
      "If you haven't had a tetanus shot in the last 5 years",
      "Numbness or difficulty moving near the wound"
    ],
    relatedRemedies: ["minor-burns", "bruises"]
  },
  {
    slug: "minor-burns",
    title: "Minor Burns",
    shortDescription: "First aid for small, first-degree burns.",
    icon: Zap,
    category: "First Aid",
    overview: "Minor burns (first-degree burns) affect only the outer layer of skin. They cause redness, mild swelling, and pain. Common causes include brief contact with hot objects, steam, or sunburn. Most minor burns heal within 1-2 weeks without special treatment.",
    homeRemedies: [
      {
        title: "Cool the Burn",
        description: "Hold the burn under cool (not cold) running water for 10-20 minutes. This helps stop the burning process and reduces pain and swelling."
      },
      {
        title: "Apply Aloe Vera",
        description: "After cooling, apply pure aloe vera gel to soothe the skin. Aloe has anti-inflammatory properties that can help with healing."
      },
      {
        title: "Cover Loosely",
        description: "Cover the burn with a sterile, non-stick bandage. This protects the area and keeps air off the burn, reducing pain."
      },
      {
        title: "Don't Pop Blisters",
        description: "If blisters form, leave them intact. They protect the underlying skin from infection. If a blister breaks, gently clean it and apply antibiotic ointment."
      },
      {
        title: "Moisturize",
        description: "Once the burn has cooled, apply a fragrance-free moisturizer or aloe vera to prevent drying and cracking."
      },
      {
        title: "Pain Relief",
        description: "Over-the-counter pain relievers like ibuprofen or acetaminophen can help manage pain and reduce inflammation."
      }
    ],
    whatToAvoid: [
      "Ice or ice water (can cause frostbite on burned skin)",
      "Butter, oil, or grease (traps heat)",
      "Toothpaste (can cause infection)",
      "Breaking blisters intentionally",
      "Adhesive bandages directly on the burn",
      "Sun exposure on healing burns"
    ],
    whenToSeekCare: [
      "Burns larger than 3 inches in diameter",
      "Burns on the face, hands, feet, genitals, or over a joint",
      "Deep burns (white or brown appearance, charring)",
      "Signs of infection (increasing pain, redness, oozing, fever)",
      "Burns that encircle an arm or leg",
      "Electrical or chemical burns",
      "Difficulty breathing (inhalation injury)"
    ],
    relatedRemedies: ["minor-cuts", "sunburn"]
  },
  {
    slug: "eye-strain",
    title: "Eye Strain",
    shortDescription: "Relief for tired, dry, or strained eyes from screen use.",
    icon: Eye,
    category: "Eye Care",
    overview: "Eye strain, or asthenopia, occurs when your eyes get tired from intense use, such as looking at computer screens, reading, or driving long distances. While uncomfortable, eye strain isn't usually serious and goes away once you rest your eyes.",
    homeRemedies: [
      {
        title: "Follow the 20-20-20 Rule",
        description: "Every 20 minutes, look at something 20 feet away for at least 20 seconds. This gives your eye muscles a break from close-up focus."
      },
      {
        title: "Adjust Your Screen",
        description: "Position your screen about arm's length away and slightly below eye level. Adjust brightness to match your surroundings and increase text size if needed."
      },
      {
        title: "Blink More Often",
        description: "When focusing on screens, we blink less, causing dry eyes. Make a conscious effort to blink more frequently, or try artificial tears."
      },
      {
        title: "Use Proper Lighting",
        description: "Reduce glare by positioning light sources appropriately. Avoid having light sources directly behind or in front of your screen."
      },
      {
        title: "Warm Compress",
        description: "Place a warm, damp cloth over your closed eyes for a few minutes. This can help relax eye muscles and relieve dryness."
      },
      {
        title: "Take Regular Breaks",
        description: "Step away from your screen regularly. Even a 5-minute break every hour can help reduce eye strain."
      }
    ],
    whatToAvoid: [
      "Extended screen time without breaks",
      "Working in dim light or with too much glare",
      "Positioning screens too close or too far",
      "Ignoring the need for corrective lenses",
      "Rubbing your eyes excessively"
    ],
    whenToSeekCare: [
      "Persistent eye pain or discomfort",
      "Noticeable changes in vision",
      "Double vision",
      "Severe headaches accompanying eye strain",
      "Red eyes that don't improve with rest",
      "Symptoms that persist despite taking preventive measures"
    ],
    relatedRemedies: ["headache", "stress-anxiety"]
  },
  {
    slug: "earache",
    title: "Earache",
    shortDescription: "Comfort measures for mild ear pain and discomfort.",
    icon: Ear,
    category: "Ear Care",
    overview: "Earaches can be caused by infections, trapped water, air pressure changes, or referred pain from jaw or teeth issues. Mild earaches in adults often resolve on their own, but children should be evaluated by a healthcare provider.",
    homeRemedies: [
      {
        title: "Warm Compress",
        description: "Apply a warm washcloth or heating pad (on low) to the affected ear. The warmth can help reduce pain and increase blood flow to the area."
      },
      {
        title: "Sleep Position",
        description: "If only one ear hurts, sleep with the affected ear facing up. This can help reduce pressure and promote drainage."
      },
      {
        title: "Olive Oil Drops",
        description: "A few drops of lukewarm olive oil can help soften earwax. Tilt your head, apply drops, wait a few minutes, then tilt to drain. Do NOT use if you suspect a ruptured eardrum."
      },
      {
        title: "Chewing Motion",
        description: "Chewing gum or yawning can help open the Eustachian tubes and relieve pressure, especially after flying or changes in altitude."
      },
      {
        title: "Stay Hydrated",
        description: "Swallowing helps open the Eustachian tubes. Drink plenty of fluids to encourage swallowing."
      },
      {
        title: "Pain Relievers",
        description: "Over-the-counter pain medications like acetaminophen or ibuprofen can help manage ear pain."
      }
    ],
    whatToAvoid: [
      "Inserting objects into the ear (Q-tips, fingers)",
      "Using ear drops if you suspect a ruptured eardrum",
      "Swimming until pain resolves",
      "Flying with severe ear pain if possible",
      "Ignoring ear pain in children (see a doctor)"
    ],
    whenToSeekCare: [
      "Severe ear pain",
      "Discharge or bleeding from the ear",
      "Fever accompanying ear pain",
      "Hearing loss",
      "Swelling around the ear",
      "Symptoms that persist more than 24-48 hours",
      "Any ear pain in infants or young children"
    ],
    relatedRemedies: ["common-cold", "sore-throat"]
  },
  {
    slug: "stress-anxiety",
    title: "Stress & Anxiety",
    shortDescription: "Calming techniques and lifestyle tips for managing everyday stress.",
    icon: Heart,
    category: "Mental Wellness",
    overview: "Stress and anxiety are normal parts of life, but when they become overwhelming, they can affect your health and well-being. Learning to manage stress through healthy coping strategies can improve your quality of life.",
    homeRemedies: [
      {
        title: "Deep Breathing Exercises",
        description: "Try the 4-7-8 technique: breathe in for 4 seconds, hold for 7 seconds, exhale for 8 seconds. Repeat 3-4 times. This activates your body's relaxation response."
      },
      {
        title: "Physical Activity",
        description: "Regular exercise releases endorphins and can reduce stress hormones. Even a 10-minute walk can help improve your mood."
      },
      {
        title: "Mindfulness and Meditation",
        description: "Practice being present in the moment. Start with just 5 minutes daily of focusing on your breath or using a guided meditation app."
      },
      {
        title: "Limit Caffeine and Alcohol",
        description: "Both can worsen anxiety symptoms. Try herbal tea or water instead of caffeinated beverages."
      },
      {
        title: "Connect with Others",
        description: "Social support is crucial for mental health. Talk to friends, family, or a support group about what you're experiencing."
      },
      {
        title: "Prioritize Sleep",
        description: "Lack of sleep amplifies stress. Aim for 7-9 hours per night and maintain a consistent sleep schedule."
      }
    ],
    whatToAvoid: [
      "Excessive caffeine or stimulants",
      "Alcohol as a coping mechanism",
      "Isolating yourself",
      "Overcommitting and not setting boundaries",
      "Doom-scrolling news and social media",
      "Neglecting physical health"
    ],
    whenToSeekCare: [
      "Anxiety or stress interferes with daily activities",
      "Feelings of hopelessness or thoughts of self-harm",
      "Physical symptoms like chest pain or difficulty breathing",
      "Panic attacks",
      "Inability to manage stress despite trying coping strategies",
      "Using substances to cope"
    ],
    relatedRemedies: ["sleep-issues", "headache"]
  },
  {
    slug: "sleep-issues",
    title: "Sleep Issues",
    shortDescription: "Tips for improving sleep quality and establishing healthy sleep habits.",
    icon: Moon,
    category: "Mental Wellness",
    overview: "Quality sleep is essential for physical and mental health. Occasional sleep difficulties are common, but persistent problems can affect your mood, energy, and overall health. Good sleep hygiene can help improve sleep quality.",
    homeRemedies: [
      {
        title: "Consistent Sleep Schedule",
        description: "Go to bed and wake up at the same time every day, including weekends. This helps regulate your body's internal clock."
      },
      {
        title: "Create a Restful Environment",
        description: "Keep your bedroom cool (65-68°F), dark, and quiet. Consider blackout curtains, earplugs, or a white noise machine."
      },
      {
        title: "Limit Screen Time",
        description: "Avoid screens (phones, tablets, computers, TV) for at least 1 hour before bed. Blue light can interfere with melatonin production."
      },
      {
        title: "Avoid Stimulants",
        description: "Don't consume caffeine after early afternoon. Also limit alcohol, which can disrupt sleep quality even if it helps you fall asleep initially."
      },
      {
        title: "Relaxation Routine",
        description: "Develop a calming bedtime routine: take a warm bath, read a book, practice gentle stretching, or try deep breathing exercises."
      },
      {
        title: "Watch What You Eat",
        description: "Avoid large meals close to bedtime. If you're hungry, have a light snack. Some people find warm milk or chamomile tea helpful."
      }
    ],
    whatToAvoid: [
      "Screens and blue light before bed",
      "Caffeine after early afternoon",
      "Alcohol before bed",
      "Heavy meals close to bedtime",
      "Long naps during the day",
      "Using your bed for work or watching TV"
    ],
    whenToSeekCare: [
      "Persistent difficulty falling or staying asleep for more than a few weeks",
      "Excessive daytime sleepiness affecting daily activities",
      "Loud snoring or gasping during sleep (may indicate sleep apnea)",
      "Sleepwalking or other unusual behaviors during sleep",
      "Reliance on sleep medications"
    ],
    relatedRemedies: ["stress-anxiety", "headache"]
  },
  {
    slug: "muscle-soreness",
    title: "Muscle Soreness",
    shortDescription: "Recovery tips for sore muscles after exercise or physical activity.",
    icon: Frown,
    category: "Pain Management",
    overview: "Delayed onset muscle soreness (DOMS) typically occurs 12-24 hours after exercise and can last up to 72 hours. It's a normal response to increased physical activity. While uncomfortable, it's usually not a cause for concern.",
    homeRemedies: [
      {
        title: "Gentle Movement",
        description: "Light activity can help reduce soreness by increasing blood flow. Try walking, swimming, or gentle stretching. Avoid intense exercise until soreness subsides."
      },
      {
        title: "Heat Therapy",
        description: "After the first 24-48 hours, apply heat to sore muscles. A warm bath, heating pad, or warm towel can help relax muscles and improve blood flow."
      },
      {
        title: "Cold Therapy",
        description: "In the first 24-48 hours, ice can help reduce inflammation. Apply for 15-20 minutes at a time with a cloth barrier between ice and skin."
      },
      {
        title: "Massage",
        description: "Gentle massage can help reduce muscle tension and improve circulation. Use a foam roller for self-massage or consider professional massage therapy."
      },
      {
        title: "Stay Hydrated",
        description: "Proper hydration helps flush out metabolic waste from muscles and supports recovery. Aim for at least 8 glasses of water daily."
      },
      {
        title: "Get Enough Sleep",
        description: "Sleep is when your body does most of its repair work. Aim for 7-9 hours of quality sleep to support muscle recovery."
      }
    ],
    whatToAvoid: [
      "Intense exercise of the same muscle groups",
      "Prolonged inactivity (complete rest can worsen stiffness)",
      "Ignoring sharp or persistent pain (may indicate injury)",
      "Dehydration",
      "Skipping warm-ups and cool-downs"
    ],
    whenToSeekCare: [
      "Severe pain that doesn't improve with rest",
      "Swelling that worsens or doesn't improve",
      "Pain that prevents normal movement",
      "Dark urine (sign of rhabdomyolysis, a serious condition)",
      "Numbness or tingling",
      "Pain that lasts more than a week"
    ],
    relatedRemedies: ["headache", "sleep-issues"]
  }
]

export const categories = [...new Set(remedies.map(r => r.category))]

export function getRemedyBySlug(slug: string): Remedy | undefined {
  return remedies.find(r => r.slug === slug)
}

export function getRelatedRemedies(slugs: string[]): Remedy[] {
  return slugs.map(slug => getRemedyBySlug(slug)).filter(Boolean) as Remedy[]
}

export function searchRemedies(query: string): Remedy[] {
  const lowerQuery = query.toLowerCase()
  return remedies.filter(
    r =>
      r.title.toLowerCase().includes(lowerQuery) ||
      r.shortDescription.toLowerCase().includes(lowerQuery) ||
      r.category.toLowerCase().includes(lowerQuery) ||
      r.overview.toLowerCase().includes(lowerQuery)
  )
}
