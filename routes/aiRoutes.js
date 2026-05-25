const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    let reply = "";

    const msg = message.toLowerCase();

    // Fever
    if (msg.includes("fever") || msg.includes("bukhar")) {
      reply =
        "Aapko fever ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Belladonna\n2. Gelsemium\n\nPrecautions:\n- Rest karein\n- Hydration maintain karein";
    }

    // Cold / Cough
    else if (
      msg.includes("cold") ||
      msg.includes("cough") ||
      msg.includes("khansi")
    ) {
      reply =
        "Aapko cold/cough ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Bryonia\n2. Aconite\n\nPrecautions:\n- Thanda paani avoid karein\n- Garam fluids lein";
    }

    // Weakness
    else if (msg.includes("weakness")) {
      reply =
        "Aapko weakness lag rahi hai.\n\nSuggested Medicines:\n1. Alfalfa Tonic\n2. Kali Phos\n\nPrecautions:\n- Proper sleep lein\n- Healthy diet maintain karein";
    }

    // Headache
    else if (
      msg.includes("headache") ||
      msg.includes("sar dard")
    ) {
      reply =
        "Aapko headache ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Belladonna\n2. Nux Vomica\n\nPrecautions:\n- Stress kam karein\n- Proper hydration rakhein";
    }

// Vomiting
    else if (msg.includes("vomiting") || msg.includes("ulti")) {
      reply =
        "Aapko vomiting ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Ipecacuanha\n2. Arsenicum Album\n\nPrecautions:\n- Thanda paani avoid karein\n- Light diet lein";
    }

    // Default
    else {
      reply =
        "Sorry, mujhe is problem ke liye medicine data nahi mila.\n\nPlease thoda aur clearly symptoms likhein.";
    }

    // stomachache
      if (msg.includes("stomachache") || msg.includes("pet dard")) {
      reply =
        "Aapko stomachache ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Magnesium Phosphoricum\n2. Nux Vomica\n\nPrecautions:\n- Thanda paani avoid karein\n- Light diet lein";
    }
    // Back Pain
    else if (msg.includes("back pain") || msg.includes("kamar dard")) {
      reply =
        "Aapko back pain ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Rhus Toxicodendron\n2. Bryonia\n\nPrecautions:\n- Heavy lifting avoid karein\n- Regular stretching exercises karein";
    }
    // Skin Issues
    else if (msg.includes("skin") || msg.includes("twacha")) {
      reply =
        "Aapko skin issues ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Sulphur\n2. Graphites\n\nPrecautions:\n- Skin ko moisturize karein\n- Harsh chemicals se bachke rahen";
    } 
    // Anxiety
    else if (msg.includes("anxiety") || msg.includes("chinta")) {
      reply =
        "Aapko anxiety ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Aconite\n2. Ignatia\n\nPrecautions:\n- Meditation karein\n- Regular exercise karein";
    }
    // Insomnia
    else if (msg.includes("insomnia") || msg.includes("neend nahi aati")) {
      reply =
        "Aapko insomnia ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Coffea Cruda\n2. Passiflora\n\nPrecautions:\n- Caffeine avoid karein\n- Sleep schedule maintain karein";
    }// Allergies
    else if (msg.includes("allergy") || msg.includes("allergies") || msg.includes("allergic")) {
      reply =
        "Aapko allergies ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Allium Cepa\n2. Arsenicum Album\n\nPrecautions:\n- Allergens se bachke rahen\n- Regular cleaning karein";
    }// Diarrhea
    else if (msg.includes("diarrhea") || msg.includes("dast")) {
      reply =
        "Aapko diarrhea ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Arsenicum Album\n2. Podophyllum\n\nPrecautions:\n- Hydration maintain karein\n- Light diet lein";
    }// Joint Pain
    else if (msg.includes("joint pain") || msg.includes("jodon ka dard")) {
      reply =
        "Aapko joint pain ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Rhus Toxicodendron\n2. Bryonia\n\nPrecautions:\n- Heavy lifting avoid karein\n- Regular stretching exercises karein";
    }// Menstrual Cramps
    else if (msg.includes("menstrual cramps") || msg.includes("period pain") || msg.includes("maasik dard")) {
      reply =
        "Aapko menstrual cramps ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Magnesia Phosphorica\n2. Sepia\n\nPrecautions:\n- Heat application karein\n- Regular exercise karein";
    }// Cold Sores
    else if (msg.includes("cold sores") || msg.includes("thande phode")) {
      reply =
        "Aapko cold sores ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Natrum Muriaticum\n2. Arsenicum Album\n\nPrecautions:\n- Stress kam karein\n- Healthy diet maintain karein";
    }// Earache
    else if (msg.includes("earache") || msg.includes("kaan dard")) {
      reply =
        "Aapko earache ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Pulsatilla\n2. Belladonna\n\nPrecautions:\n- Water se bachke rahen\n- Regular cleaning karein";
    } // Sore Throat
    else if (msg.includes("sore throat") || msg.includes("gale mein dard")) {
      reply =
        "Aapko sore throat ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Belladonna\n2. Mercurius Solubilis\n\nPrecautions:\n- Thanda paani avoid karein\n- Garam fluids lein";
    }// Fatigue
    else if (msg.includes("fatigue") || msg.includes("thakan")) {
      reply =
        "Aapko fatigue ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Ginseng\n2. Rhodiola\n\nPrecautions:\n- Proper sleep lein\n- Healthy diet maintain karein";
    }// Muscle Pain
    else if (msg.includes("muscle pain") || msg.includes("maanspeshiyon ka dard")) {
      reply =
        "Aapko muscle pain ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Arnica Montana\n2. Rhus Toxicodendron\n\nPrecautions:\n- Heavy lifting avoid karein\n- Regular stretching exercises karein";
    }// Nausea  
    else if (msg.includes("nausea") || msg.includes("matli")) {
      reply =
        "Aapko nausea ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Ipecacuanha\n2. Arsenicum Album\n\nPrecautions:\n- Thanda paani avoid karein\n- Light diet lein";
    }// Dizziness
    else if (msg.includes("dizziness") || msg.includes("chakkar")) {
      reply =
        "Aapko dizziness ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Gelsemium\n2. Cocculus\n\nPrecautions:\n- Sudden movements avoid karein\n- Proper hydration rakhein";
    }// High Blood Pressure
    else if (msg.includes("high blood pressure") || msg.includes("hypertension") || msg.includes("uchch raktchaap")) {
      reply =
        "Aapko high blood pressure ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Rauwolfia Serpentina\n2. Crataegus\n\nPrecautions:\n- Salt intake kam karein\n- Regular exercise karein";
    }// Low Blood Pressure
    else if (msg.includes("low blood pressure") || msg.includes("hypotension") || msg.includes("nicha raktchaap")) {
      reply =
        "Aapko low blood pressure ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Nux Vomica\n2. Phosphorus\n\nPrecautions:\n- Sudden movements avoid karein\n- Proper hydration rakhein";
    }// Asthma
    else if (msg.includes("asthma") || msg.includes("dama")) {
      reply =
        "Aapko asthma ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Arsenicum Album\n2. Natrum Sulphuricum\n\nPrecautions:\n- Allergens se bachke rahen\n- Regular cleaning karein";
    }// Allergic Rhinitis
    else if (msg.includes("allergic rhinitis") || msg.includes("allergy se naak band")) {
      reply =
        "Aapko allergic rhinitis ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Allium Cepa\n2. Arsenicum Album\n\nPrecautions:\n- Allergens se bachke rahen\n- Regular cleaning karein";
    }// Sinusitis
    else if (msg.includes("sinusitis") || msg.includes("sinus infection") || msg.includes("sinus dard")) {
      reply =
        "Aapko sinusitis ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Kali Bichromicum\n2. Mercurius Solubilis\n\nPrecautions:\n- Nasal irrigation karein\n- Allergens se bachke rahen";
    }// Migraine
    else if (msg.includes("migraine") || msg.includes("teekhi sar dard")) {
      reply =// Aapko migraine ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Belladonna\n2. Nux Vomica\n\nPrecautions:\n- Stress kam karein\n- Proper hydration rakhein";
         "Aapko migraine ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Belladonna\n2. Nux Vomica\n\nPrecautions:\n- Stress kam karein\n- Proper hydration rakhein";
    }// Heartburn
    else if (msg.includes("heartburn") || msg.includes("acid reflux") || msg.includes("pet mein jalan")) {
      reply =
        "Aapko heartburn ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Nux Vomica\n2. Carbo Vegetabilis\n\nPrecautions:\n- Spicy foods avoid karein\n- Light diet lein";
    }// Depression
    else if (msg.includes("depression") || msg.includes("udasi")) {
      reply =
        "Aapko depression ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Ignatia\n2. Natrum Muriaticum\n\nPrecautions:\n- Regular exercise karein\n- Social interactions maintain karein";
    }// Anxiety
    else if (msg.includes("anxiety") || msg.includes("chinta")) {
      reply =
        "Aapko anxiety ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Aconite\n2. Ignatia\n\nPrecautions:\n- Meditation karein\n- Regular exercise karein";
    }// fits
    else if (msg.includes("fits") || msg.includes("douray")) {
      reply =
        "Aapko fits ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Cuprum Metallicum\n2. Cicuta Virosa\n\nPrecautions:\n- Triggers se bachke rahen\n- Regular medical checkups karein";
    }// sun allergy
    else if (msg.includes("sun allergy") || msg.includes("dhoop se allergy")) {
      reply =
        "Aapko sun allergy ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Natrum Muriaticum\n2. Arsenicum Album\n\nPrecautions:\n- Dhoop se bachke rahen\n- Sunscreen ka use karein";
    }//high cholesterol
    else if (msg.includes("high cholesterol") || msg.includes("cholesterol zyada")) {
      reply =
        "Aapko high cholesterol ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Allium Sativum\n2. Crataegus\n\nPrecautions:\n- Healthy diet lein\n- Regular exercise karein";
    }// low cholesterol
    else if (msg.includes("low cholesterol") || msg.includes("cholesterol kam")) {
      reply =
        "Aapko low cholesterol ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Nux Vomica\n2. Phosphorus\n\nPrecautions:\n- Healthy diet lein\n- Regular exercise karein";
    }// Urinary Tract Infection
    else if (msg.includes("urinary tract infection") || msg.includes("uti") || msg.includes("peshab mein jalan")) {
      reply =
        "Aapko urinary tract infection ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Cantharis\n2. Staphysagria\n\nPrecautions:\n- Proper hydration rakhein\n- Personal hygiene maintain karein";
    }// high sugar
    else if (msg.includes("high sugar") || msg.includes("diabetes") || msg.includes("shakar zyada")) {
      reply =
        "Aapko high sugar ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Syzygium Jambolanum\n2. Gymnema Sylvestre\n\nPrecautions:\n- Sugar intake kam karein\n- Regular exercise karein";
    }// low sugar
    else if (msg.includes("low sugar") || msg.includes("hypoglycemia") || msg.includes("shakar kam")) {
      reply =
        "Aapko low sugar ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Nux Vomica\n2. Phosphorus\n\nPrecautions:\n- Regular meals lein\n- Healthy snacks carry karein";
    }// high uric acid
    else if (msg.includes("high uric acid") || msg.includes("gout") || msg.includes("uric acid zyada")) {
      reply =
        "Aapko high uric acid ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Colchicum Autumnale\n2. Urtica Urens\n\nPrecautions:\n- Purine-rich foods avoid karein\n- Proper hydration rakhein";
    }// low uric acid
    else if (msg.includes("low uric acid") || msg.includes("uric acid kam")) {
      reply =
        "Aapko low uric acid ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Nux Vomica\n2. Phosphorus\n\nPrecautions:\n- Healthy diet lein\n- Regular exercise karein";
    }// Back Pain
    else if (msg.includes("back pain") || msg.includes("kamar dard")) {
      reply =
        "Aapko back pain ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Rhus Toxicodendron\n2. Bryonia\n\nPrecautions:\n- Heavy lifting avoid karein\n- Regular stretching exercises karein";
    }//toothache
    else if (msg.includes("toothache") || msg.includes("dant dard")) {
      reply =
        "Aapko toothache ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Chamomilla\n2. Belladonna\n\nPrecautions:\n- Cold foods avoid karein\n- Regular dental checkups karein";
    }//chest pain
    else if (msg.includes("chest pain") || msg.includes("seene mein dard")) {
      reply =
        "Aapko chest pain ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Aconite\n2. Bryonia\n\nPrecautions:\n- Heavy meals avoid karein\n- Regular exercise karein";
    }//Gas / bloating
    else if (msg.includes("gas") || msg.includes("bloating") || msg.includes("pet phoolna")) {
      reply =
        "Aapko gas/bloating ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Carbo Vegetabilis\n2. Lycopodium\n\nPrecautions:\n- Carbonated drinks avoid karein\n- Light diet lein";
    }//Food poisoning
    else if (msg.includes("food poisoning") || msg.includes("khaane se zehar")) {
      reply =
        "Aapko food poisoning ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Arsenicum Album\n2. Podophyllum\n\nPrecautions:\n- Hydration maintain karein\n- Light diet lein";
    }//rashes
    else if (msg.includes("rashes") || msg.includes("daane")) {
      reply =
        "Aapko rashes ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Sulphur\n2. Graphites\n\nPrecautions:\n- Skin ko moisturize karein\n- Harsh chemicals se bachke rahen";
    }// Headache
    else if (
      msg.includes("headache") ||
      msg.includes("sar dard")
    ) {
      reply =
         "Aapko headache ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Belladonna\n2. Nux Vomica\n\nPrecautions:\n- Stress kam karein\n- Proper hydration rakhein";
    }//Fungal infection
    else if (msg.includes("fungal infection") || msg.includes("fungus se infection")) {
      reply =
        "Aapko fungal infection ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Sulphur\n2. Graphites\n\nPrecautions:\n- Skin ko moisturize karein\n- Harsh chemicals se bachke rahen";
    }// Hair Loss
    else if (msg.includes("hair loss") || msg.includes("baal jhadna")) {
      reply =
        "Aapko hair loss ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Phosphorus\n2. Natrum Muriaticum\n\nPrecautions:\n- Healthy diet lein\n- Regular scalp massage karein";
    }// Acne
    else if (msg.includes("acne") || msg.includes("muhase")) {
      reply =
        "Aapko acne ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Sulphur\n2. Graphites\n\nPrecautions:\n- Skin ko moisturize karein\n- Harsh chemicals se bachke rahen";
    } // Hair Fall
    else if (msg.includes("hair fall") || msg.includes("baal jhadna")) {
      reply =
        "Aapko hair fall ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Phosphorus\n2. Natrum Muriaticum\n\nPrecautions:\n- Healthy diet lein\n- Regular scalp massage karein";
    }//Dehydration
    else if (msg.includes("dehydration") || msg.includes("thanda")) {
      reply =
        "Aapko dehydration ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Natrum Muriaticum\n2. Phosphorus\n\nPrecautions:\n- Proper hydration rakhein\n- Light diet lein";
    }//Vitamin deficiency
    else if (msg.includes("vitamin deficiency") || msg.includes("vitamin kam")) {
      reply =
        "Aapko vitamin deficiency ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Natrum Muriaticum\n2. Phosphorus\n\nPrecautions:\n- Healthy diet lein\n- Regular exercise karein";
    }//Cuts / wounds
    else if (msg.includes("cuts") || msg.includes("wounds") || msg.includes("zakhm")) {
      reply =
        "Aapko cuts/wounds ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Arnica Montana\n2. Calendula\n\nPrecautions:\n- Wound ko clean rakhein\n- Infection se bachke rahen";
    } // Sprains / strains
    else if (msg.includes("sprains") || msg.includes("strains") || msg.includes("moodna")) {
      reply =
        "Aapko sprains/strains ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Arnica Montana\n2. Rhus Toxicodendron\n\nPrecautions:\n- Heavy lifting avoid karein\n- Regular stretching exercises karein";
    } // Cramps
    else if (msg.includes("cramps") || msg.includes("maanspeshiyon ka dard")) {
      reply =
        "Aapko cramps ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Magnesia Phosphorica\n2. Sepia\n\nPrecautions:\n- Heat application karein\n- Regular exercise karein";
    }//Heatstroke
    else if (msg.includes("heatstroke") || msg.includes("garmi se bechaini")) {
      reply =
        "Aapko heatstroke ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Belladonna\n2. Gelsemium\n\nPrecautions:\n- Dhoop se bachke rahen\n- Proper hydration rakhein";
    }//Mosquito bites
    else if (msg.includes("mosquito bites") || msg.includes("machhar ke kaat")) {
      reply =
        "Aapko mosquito bites ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Apis Mellifica\n2. Ledum Palustre\n\nPrecautions:\n- Mosquito repellents ka use karein\n- Standing water se bachke rahen";
    }//Pollution allergy
    else if (msg.includes("pollution allergy") || msg.includes("dhoop se allergy")) {
      reply =
        "Aapko pollution allergy ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Allium Cepa\n2. Arsenicum Album\n\nPrecautions:\n- Pollution se bachke rahen\n- Regular cleaning karein";
    } // Hair Dandruff
    else if (msg.includes("hair dandruff") || msg.includes("baal mein khujli")) {
      reply =
        "Aapko hair dandruff ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Sulphur\n2. Graphites\n\nPrecautions:\n- Regular hair washing karein\n- Harsh chemicals se bachke rahen";
    }// Eye Strain
    else if (msg.includes("eye strain") || msg.includes("aankhon mein thakan")) {
      reply =
        "Aapko eye strain ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Euphrasia\n2. Ruta Graveolens\n\nPrecautions:\n- Screen time kam karein\n- Regular breaks lein";
    }// Swelling
    else if (msg.includes("swelling") || msg.includes("soojan")) {
      reply =
        "Aapko swelling ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Apis Mellifica\n2. Ledum Palustre\n\nPrecautions:\n- Ice application karein\n- Proper elevation rakhein";
    }// bruises
    else if (msg.includes("bruises") || msg.includes("chot ke nishan")) {
      reply =
        "Aapko bruises ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Arnica Montana\n2. Calendula\n\nPrecautions:\n- Ice application karein\n- Proper elevation rakhein";
    }// epilepsy
    else if (msg.includes("epilepsy") || msg.includes("douray")) {
      reply =
        "Aapko epilepsy ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Cuprum Metallicum\n2. Cicuta Virosa\n\nPrecautions:\n- Triggers se bachke rahen\n- Regular medical checkups karein";
    }// sun allergy    
    else if (msg.includes("sun allergy") || msg.includes("dhoop se allergy")) {
      reply =
        "Aapko sun allergy ke symptoms lag rahe hain.\n\nSuggested Medicines:\n1. Natrum Muriaticum\n2. Arsenicum Album\n\nPrecautions:\n- Dhoop se bachke rahen\n- Sunscreen ka use karein";
    }
    

    res.json({ reply });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      reply: "AI service error",
    });
  }
});

module.exports = router;