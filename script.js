/* ============================================
   ANTIPAROS VIEW VILLAS — Main Script
   ============================================ */

(function () {
  'use strict';

  // ── Translations ──────────────────────────

  const translations = {
    el: {
      'nav.experience': 'Η Εμπειρία',
      'nav.villas': 'Οι Βίλες',
      'nav.reviews': 'Κριτικές',
      'nav.antiparos': 'Αντίπαρος',
      'nav.info': 'Πληροφορίες',
      'nav.faq': 'FAQ',
      'nav.contact': 'Επικοινωνία',
      'hero.badge': 'Άριστο',
      'hero.subtitle': 'Πανοραμική θέα, σπιτική φιλοξενία, αξέχαστες στιγμές στην Αντίπαρο',
      'hero.cta': 'Επικοινωνήστε μαζί μας',
      'experience.tag': 'Φιλοξενία',
      'experience.title': 'Η Anna σας υποδέχεται',
      'experience.desc': 'Στο Antiparos View δεν θα βρείτε απρόσωπη εξυπηρέτηση. Η Anna, με τη ζεστή της φιλοξενία, φροντίζει κάθε λεπτομέρεια — από τη σπιτική τάρτα που σας περιμένει στην άφιξη, μέχρι το γεμάτο ψυγείο και το pickup από το λιμάνι. Εδώ νιώθεις σαν σπίτι σου.',
      'experience.h1': 'Πανοραμική Θέα',
      'experience.p1': 'Αιγαίο, Πάρος, κανάλι — η θέα από τη βεράντα σας κόβει την ανάσα κάθε πρωί.',
      'experience.h2': 'Πισίνα με Θέα',
      'experience.p2': 'Βουτιά στην πισίνα με απεριόριστη θέα στο Αιγαίο — ό,τι καλύτερο για τα πρωινά σας.',
      'experience.h3': 'Σπιτικές Γεύσεις',
      'experience.p3': 'Σπιτική τάρτα, φρέσκα αυγά, μαρμελάδα, φρούτα — η Anna ετοιμάζει το welcome package με αγάπη.',
      'experience.h4': 'Προσωπική Φροντίδα',
      'experience.p4': 'Pickup από το λιμάνι, tips για το νησί, πετσέτες παραλίας — η Anna σκέφτεται τα πάντα για εσάς.',
      'experience.cap1': 'Πισίνα με πανοραμική θέα',
      'experience.cap2': 'Σπιτικό welcome package',
      'experience.cap3': 'Κήπος με λουλούδια',
      'villas.tag': 'Διαμονή',
      'villas.title': 'Οι Βίλες μας',
      'villas.desc': 'Πέντε Κυκλαδίτικες βίλες, η καθεμία με τη δική της προσωπικότητα — όλες με θέα θάλασσα, πλήρη εξοπλισμό και τη φροντίδα της Anna.',
      'villas.v1guests': 'Έως 3 άτομα',
      'villas.v2guests': 'Έως 4 άτομα',
      'villas.v3guests': 'Έως 5 άτομα',
      'villas.v4guests': 'Έως 7 άτομα',
      'villas.v5guests': 'Έως 4 άτομα',
      'villas.v1bed1': 'Υπνοδωμάτιο: 2 μονά κρεβάτια',
      'villas.v1bed2': 'Σαλόνι: 1 καναπές-κρεβάτι',
      'villas.v2bed1': 'Υπνοδωμάτιο 1: 2 μονά κρεβάτια',
      'villas.v2bed2': 'Υπνοδωμάτιο 2: 1 διπλό κρεβάτι',
      'villas.v3bed1': 'Υπνοδωμάτιο 1: 1 μονό & 1 διπλό κρεβάτι',
      'villas.v3bed2': 'Υπνοδωμάτιο 2: 2 μονά κρεβάτια',
      'villas.v4bed1': 'Υπνοδωμάτιο 1: 2 μονά κρεβάτια',
      'villas.v4bed2': 'Υπνοδωμάτιο 2: 2 μονά κρεβάτια',
      'villas.v4bed3': 'Υπνοδωμάτιο 3: 1 διπλό κρεβάτι',
      'villas.v4bed4': 'Σαλόνι: 1 καναπές-κρεβάτι',
      'villas.v5bed1': 'Υπνοδωμάτιο 1: 2 μονά κρεβάτια',
      'villas.v5bed2': 'Υπνοδωμάτιο 2: 1 μεγάλο διπλό κρεβάτι',
      'villas.v1desc': 'Κήπος με λουλούδια, θέα θάλασσα. Ιδανική για χαλάρωση και ηρεμία.',
      'villas.v2desc': 'Σε λόφο με εκπληκτική θέα θάλασσα. Η τέλεια τοποθεσία για αξέχαστα ηλιοβασιλέματα.',
      'villas.v3desc': 'Θέα θάλασσα, κοντά στο κέντρο της Αντιπάρου. Ιδανική για οικογενειακές διακοπές.',
      'villas.v4desc': 'Μεγάλη μεζονέτα 2 επιπέδων με εκπληκτική θέα θάλασσα. Ιδανική για μεγάλη οικογένεια ή παρέα φίλων.',
      'villas.v5desc': 'Άνετο ημιυπόγειο διαμέρισμα που συμπληρώνει ιδανικά τη μεζονέτα, για μεγάλα groups.',
      'villas.garden': 'Κήπος',
      'villas.seaview': 'Θέα θάλασσα',
      'villas.hilltop': 'Λοφίσκος',
      'villas.family': 'Οικογενειακή',
      'villas.twolevels': '2 Επίπεδα',
      'villas.groups': 'Για παρέες',
      'villas.combinable': 'Συνδυάζεται',
      'villas.maisonette': 'Μεζονέτα',
      'villas.maisonette_label': '— Μεζονέτα',
      'villas.cta': 'Ρωτήστε για διαθεσιμότητα',
      'villas.amenities_title': 'Όλες οι βίλες περιλαμβάνουν',
      'villas.a1': 'Πισίνα',
      'villas.a2': 'Πλήρης Κουζίνα',
      'villas.a3': 'Parking',
      'villas.a4': 'Πετσέτες Παραλίας',
      'villas.a5': 'Πλυντήριο',
      'villas.a6': 'Καθημερινή Καθαριότητα',
      'villas.a7': 'Welcome Package',
      'villas.a8': 'Pickup από Λιμάνι',
      'villas.a9': 'Θυρίδα Ασφαλείας',
      'villas.a10': 'Θέρμανση',
      'villas.a11': 'Ιδιωτική Είσοδος',
      'villas.a12': 'Ομπρέλες Παραλίας',
      'villas.a13': 'Ηχομόνωση',
      'reviews.tag': 'Αξιολογήσεις',
      'reviews.title': 'Τι λένε οι φιλοξενούμενοί μας',
      'reviews.excellent': 'Άριστο',
      'reviews.count': '30 σχόλια στο Booking.com',
      'reviews.staff': 'Προσωπικό',
      'reviews.facilities': 'Παροχές',
      'reviews.cleanliness': 'Καθαριότητα',
      'reviews.comfort': 'Άνεση',
      'reviews.value': 'Σχέση ποιότητας/τιμής',
      'reviews.location': 'Τοποθεσία',
      'reviews.za': 'Νότια Αφρική',
      'reviews.gr': 'Ελλάδα',
      'reviews.ch': 'Ελβετία',
      'reviews.us': 'ΗΠΑ',
      'reviews.it': 'Ιταλία',
      'reviews.fr': 'Γαλλία',
      'reviews.de': 'Γερμανία',
      'reviews.uk': 'Ηνωμένο Βασίλειο',
      'reviews.r1': '"Αγαπήσαμε τα πάντα στο κατάλυμα! Η τοποθεσία και η θέα από ψηλά προς την Αντίπαρο και τον ωκεανό ήταν μαγευτική. Η Anna είχε τοποθετήσει βασικά είδη στο ψυγείο για εμάς... αυτή η χειρονομία είναι μια ακόμη λεπτομέρεια που ξεχωρίζει το διαμέρισμα της Anna από τα υπόλοιπα. Αυτή και η οικογένειά της είναι πολύ ξεχωριστοί άνθρωποι. Το Antiparos View ήταν ο τελευταίος μας σταθμός μετά από 2 εβδομάδες στην Ελλάδα και συμφωνούμε ότι αφήσαμε το καλύτερο για το τέλος!"',
      'reviews.r2': '"Το κατάλυμα ήταν εκπληκτικό! Καθαρό και σε τέλεια τοποθεσία. Η Anna ήταν η καλύτερη οικοδέσποινα! Στοχαστική, ευγενική — με τις σπιτικές πίτες και τα γλυκά της μας μάγεψε."',
      'reviews.r3': '"Το διαμέρισμα βρίσκεται σε πανέμορφη τοποθεσία, με εκπληκτική θέα στη θάλασσα και απέναντι στην Πάρο. Κάθε πρωί απολάμβανα να κολυμπάω στη μεγάλη πισίνα. Το κορυφαίο σημείο της διαμονής ήταν η Anna, μια εξαιρετική οικοδέσποινα. Η ζεστή φιλοξενία και τα σπιτικά κέικ της με έκαναν να νιώσω σαν στο σπίτι μου."',
      'reviews.r4': '"Το όνομα τα λέει όλα. Η θέα είναι καταπληκτική. Από τη στιγμή που η Anna μας πήρε από το ferry νιώσαμε ξεχωριστοί. Είχε βάλει αυγά, ψωμί και φρούτα στην κουζίνα. Η πισίνα είναι υπέροχη και το τέλειο μέρος για να ξεκουραστείς μετά το ταξίδι. Σίγουρα θα μείνουμε εδώ ξανά."',
      'reviews.r5': '"Τέλεια τοποθεσία, πανέμορφο σπίτι, καθαρό, φροντισμένο σε όλα, υποδοχή με σπιτική τάρτα, μπισκότα, χυμούς, καφέ. Η κα Anna μιας απερίγραπτης ευγένειας. Στην αναχώρηση μας ετοίμασε δύο αλμυρές πίτες φτιαγμένες από εκείνη. Ποτέ δεν είχαμε βρει τόσα... Θα επιστρέψουμε σίγουρα, το συνιστούμε ανεπιφύλακτα!"',
      'reviews.r6': '"Η άνεση, η καθαριότητα, η διακόσμηση και οι λεπτομέρειες της ιδιοκτήτριας εκτιμήθηκαν πολύ! Η φανταστική πισίνα, η θέα είναι απίστευτες και μόλις 5 λεπτά από το λιμάνι της Αντιπάρου."',
      'reviews.r7': '"Εξαιρετική τοποθεσία, μεγάλη βεράντα με τραπέζι, καρέκλες, ξαπλώστρες και πανέμορφη θέα. Το διαμέρισμα είναι πολύ καλά εξοπλισμένο, πολλές μικρές λεπτομέρειες από την οικοδέσποινα και εξαιρετικά άνετο κρεβάτι."',
      'reviews.r8': '"Ζεστό καλωσόρισμα και πανέμορφη θέα. Τα πάντα παρέχονταν — από πετσέτες παραλίας μέχρι γεμάτο ψυγείο. Η πιο πλήρης διαμονή που είχα ποτέ στην Ελλάδα."',
      'reviews.google_count': '35 κριτικές στο Google',
      'reviews.r9': '"Ο πιο πλήρης χώρος που έχω δει στην Ελλάδα. Φρέσκα φρούτα, αυγά, ψωμί, Nespresso, είδη περιποίησης, ομπρέλα θαλάσσης, πετσέτες πισίνας — πάρα πολλά για να αναφέρω. Μια φρέσκια τούρτα με περίμενε στο τραπέζι μετά τον καθαρισμό. Εκπληκτική εξυπηρέτηση. Η Anna είναι εξαιρετική. Ιδιαίτερα συνιστάται για οικογένειες."',
      'reviews.r10': '"ΚΑΤΑΠΛΗΚΤΙΚΗ ΘΕΑ! Ωραίες βεράντες για φαγητό ή θέα. Καθαρή πισίνα. Σχεδόν όλες οι ανέσεις παρέχονταν: σκεύη κουζίνας, πετσέτες ΚΑΙ πετσέτες παραλίας, καφετιέρες, ομπρέλες παραλίας. Είδαμε την ανατολή του ήλιου την τελευταία μας μέρα και θέλαμε να αποκοιμηθούμε έξω. Θα το ξανακλείναμε!"',
      'reviews.r11': '"Απίστευτη τοποθεσία, τέλεια οικοδέσποινα η κα. Άννα, μας παρείχε ότι χρειαζόμασταν για να γίνει η διαμονή μας ανέμελη, ξεκούραστη και άνετη. Όταν ξαναπάμε Αντίπαρο μόνο εκεί θα θέλαμε να μείνουμε."',
      'reviews.r12': '"Υπέροχα όλα, περάσαμε φανταστικά! Θέα όλη την Αντίπαρο και την Πάρο. Ο χώρος έχει τα πάντα, καθαρίζεται καθημερινά και η κα Άννα μας καλοδέχτηκε με ζεστή πάστα Φλωρά, παριανό κρασί και παραδοσιακά αλμυρά πιτάκια."',
      'reviews.r13': '"Μπαλκόνι στο Αιγαίο! Εξαιρετικό κατάλυμα με πανοραμική θέα στην Αντίπαρο και στην δυτική ακτογραμμή της Πάρου. Άρτια και υπερπλήρη εξοπλισμένα διαμερίσματα για άνετη διαμονή."',
      'antiparos.tag': 'Ο Προορισμός',
      'antiparos.title': 'Αντίπαρος — Το μυστικό των Κυκλάδων',
      'antiparos.p1': 'Η Αντίπαρος είναι ένα μικρό νησί απέναντι από την Πάρο, γνωστό για την αυθεντική Κυκλαδίτικη ατμόσφαιρα, τις κρυστάλλινες παραλίες και την ηρεμία που δύσκολα βρίσκεις αλλού.',
      'antiparos.p2': 'Μακριά από τον συνωστισμό, η Αντίπαρος προσφέρει αυθεντικές εμπειρίες — από τη σπηλιά με τους σταλακτίτες μέχρι τις παραλίες της Σωρός και του Αγίου Γεωργίου.',
      'antiparos.distances': 'Αποστάσεις',
      'antiparos.d1': 'Λιμάνι Αντιπάρου — 1 χλμ (2 λεπτά)',
      'antiparos.d2': 'Κέντρο χωριού — 800μ (10 λεπτά με τα πόδια)',
      'antiparos.d3': 'Παραλίες — 2-8 χλμ',
      'antiparos.d4': 'Σπηλιά Αντιπάρου — 9 χλμ',
      'antiparos.d5': 'Λιμάνι Πούντας (ferry Πάρος↔Αντίπαρος) — 1.5 χλμ',
      'antiparos.d6': 'Σούπερ μάρκετ — 600μ (8 λεπτά με τα πόδια)',
      'antiparos.d7': 'Εστιατόρια & μπαρ — 800μ (στο κέντρο)',
      'antiparos.d8': 'Αεροδρόμιο Πάρου (PAS) — 15 χλμ + ferry',
      'antiparos.beaches_title': 'Κοντινές Παραλίες',
      'antiparos.b1': 'Φραγκοπαπάδες',
      'antiparos.b2': 'Ψαραλυκή',
      'antiparos.b3': 'Σιφνέικο',
      'antiparos.b4': 'Παναγία',
      'antiparos.cafes_title': 'Εστιατόρια & Μπαρ',
      'antiparos.sights_title': 'Αξιοθέατα',
      'antiparos.s1': 'Σπήλαιο Αντιπάρου',
      'antiparos.s2': 'Αρχαιολογικό Μουσείο Πάρου',
      'antiparos.s3': 'Κάστρο Αντιπάρου',
      'pool.tag': 'Πισίνα',
      'pool.title': 'Η πισίνα σας περιμένει',
      'pool.desc': 'Ξυπνήστε και βουτήξτε στην πισίνα με απεριόριστη θέα στο Αιγαίο, την Πάρο και το κανάλι. Η στιγμή που κάθε φιλοξενούμενος θυμάται.',
      'pool.cta': 'Ρωτήστε για διαθεσιμότητα',
      'video.tag': 'Βίντεο',
      'video.title': 'Δείτε τον χώρο μας',
      'video.desc': 'Μια σύντομη βόλτα στο Antiparos View — τη θέα, τις βίλες, την πισίνα και τον κήπο.',
      'info.cancel_title': 'Πολιτική Ακύρωσης',
      'info.cancel': 'Δωρεάν ακύρωση έως 14 ημέρες πριν την άφιξη. Επικοινωνήστε μαζί μας για λεπτομέρειες.',
      'info.tag': 'Χρήσιμα',
      'info.title': 'Πληροφορίες Διαμονής',
      'info.season_title': 'Σεζόν',
      'info.season': '1 Μαΐου — 30 Σεπτεμβρίου',
      'info.checkin': 'Check-in: μετά τις 14:30<br>Check-out: μέχρι τις 12:00',
      'info.minstay_title': 'Ελάχιστη Διαμονή',
      'info.minstay': 'Ιούλιο & Αύγουστο: 1 εβδομάδα<br>Check-in/out: Σάββατο ή Κυριακή',
      'info.extra_title': 'Επιπλέον Άτομο',
      'info.extra': '+€15 ανά βράδυ',
      'info.deposit_title': 'Προκαταβολή',
      'info.deposit': '30% εντός 7 ημερών από την κράτηση',
      'info.pickup_title': 'Pickup',
      'info.pickup': 'Δωρεάν pickup από το λιμάνι — η Anna ή η νύφη Emma σας περιμένουν!',
      'faq.tag': 'Συχνές Ερωτήσεις',
      'faq.title': 'Χρήσιμες Πληροφορίες',
      'faq.desc': 'Απαντήσεις στα πιο συχνά ερωτήματα των επισκεπτών μας.',
      'faq.q1': 'Σερβίρεται πρωινό;',
      'faq.a1': 'Η Anna φροντίζει να γεμίσει το ψυγείο σας με σπιτικά κεράσματα, φρούτα και βασικά για πρωινό κατά την άφιξή σας — ένα ζεστό καλωσόρισμα που θα θυμάστε. Δεν υπάρχει οργανωμένο πρωινό, αλλά η πλήρης κουζίνα σας δίνει κάθε δυνατότητα.',
      'faq.q2': 'Μπορώ να παρκάρω εκεί;',
      'faq.a2': 'Ναι, υπάρχει δωρεάν ιδιωτικός χώρος στάθμευσης στο property.',
      'faq.q3': 'Υπάρχει πισίνα;',
      'faq.a3': 'Ναι! Η πισίνα μας με πανοραμική θέα στο Αιγαίο είναι από τα αγαπημένα σημεία των επισκεπτών μας. Κοινόχρηστη για όλες τις βίλες.',
      'faq.q4': 'Ποια είναι η πολιτική σχετικά με το WiFi;',
      'faq.a4': 'Δωρεάν WiFi σε όλους τους χώρους — εσωτερικούς και εξωτερικούς.',
      'faq.q5': 'Υπάρχει υπηρεσία μεταφοράς από/προς το αεροδρόμιο;',
      'faq.a5': 'Η Anna ή η νύφη Emma σας περιμένουν με δωρεάν pickup στο λιμάνι της Αντιπάρου. Για μεταφορά από το αεροδρόμιο Πάρου, επικοινωνήστε μαζί μας ώστε να σας βοηθήσουμε να οργανώσετε τη μετακίνησή σας.',
      'faq.q6': 'Υπάρχουν δωμάτια με ιδιωτικό μπάνιο;',
      'faq.a6': 'Ναι, όλες οι βίλες διαθέτουν ιδιωτικό μπάνιο με ντους.',
      'faq.q7': 'Υπάρχουν δωμάτια με μπαλκόνι;',
      'faq.a7': 'Κάθε βίλα έχει ιδιωτική βεράντα ή αυλή με θέα — ιδανική για πρωινό καφέ με θέα το Αιγαίο.',
      'faq.q8': 'Υπάρχει εστιατόριο;',
      'faq.a8': 'Δεν υπάρχει εστιατόριο στο property, αλλά κάθε βίλα έχει πλήρη κουζίνα και υπάρχει BBQ στον κήπο. Ταβέρνες και εστιατόρια βρίσκονται στο κέντρο της Αντιπάρου, σε απόσταση ~1.5 χλμ.',
      'faq.q9': 'Τι αξιοθέατα και επιλογές μεταφοράς υπάρχουν κοντά;',
      'faq.a9': 'Σπήλαιο Αντιπάρου, παραλίες (Σωρός, Φανερωμένη), κέντρο νησιού. Υπάρχει τοπικό λεωφορείο και μπορείτε να νοικιάσετε ATV/αυτοκίνητο. Το ferry Πούντα–Αντίπαρος είναι κάθε 30 λεπτά.',
      'faq.q10': 'Υπάρχει σπα;',
      'faq.a10': 'Δεν υπάρχει σπα, αλλά η πισίνα, ο κήπος και η ηρεμία του τοπίου προσφέρουν τη δική τους χαλάρωση.',
      'contact.tag': 'Επικοινωνία',
      'contact.title': 'Σας περιμένουμε',
      'contact.desc': 'Στείλτε μας μήνυμα ή καλέστε μας — η Anna θα χαρεί να απαντήσει σε κάθε ερώτησή σας.',
      'contact.name': 'Ονοματεπώνυμο',
      'contact.email': 'Email',
      'contact.checkin_date': 'Ημερομηνία Άφιξης',
      'contact.checkout_date': 'Ημερομηνία Αναχώρησης',
      'contact.guests': 'Αριθμός Ατόμων',
      'contact.villa_interest': 'Βίλα που ενδιαφέρεστε',
      'contact.villa_unsure': 'Δεν είμαι σίγουρος/η',
      'contact.message': 'Μήνυμα',
      'contact.send': 'Αποστολή Μηνύματος',
      'contact.whatsapp_text': 'Στείλτε μήνυμα τώρα',
      'contact.phone': 'Τηλέφωνο',
      'contact.anna_text': 'Η Anna απαντά προσωπικά σε κάθε μήνυμα. Μη διστάσετε να ρωτήσετε οτιδήποτε!',
      'footer.tagline': 'Αντίπαρος, Κυκλάδες, Ελλάδα — 84007'
    },
    en: {
      'nav.experience': 'Experience',
      'nav.villas': 'Villas',
      'nav.reviews': 'Reviews',
      'nav.antiparos': 'Antiparos',
      'nav.info': 'Information',
      'nav.faq': 'FAQ',
      'nav.contact': 'Contact',
      'hero.badge': 'Excellent',
      'hero.subtitle': 'Panoramic views, homemade hospitality, unforgettable moments in Antiparos',
      'hero.cta': 'Get in touch',
      'experience.tag': 'Hospitality',
      'experience.title': 'Anna welcomes you',
      'experience.desc': 'At Antiparos View you won\'t find impersonal service. Anna, with her warm hospitality, takes care of every detail — from the homemade tart waiting for you on arrival, to the stocked fridge and the pickup from the port. Here you feel at home.',
      'experience.h1': 'Panoramic View',
      'experience.p1': 'The Aegean Sea, Paros, the channel — the view from your terrace takes your breath away every morning.',
      'experience.h2': 'Pool with a View',
      'experience.p2': 'A dive into the pool with an endless view of the Aegean — the best way to start your morning.',
      'experience.h3': 'Homemade Flavors',
      'experience.p3': 'Homemade tart, fresh eggs, jam, fruits — Anna prepares the welcome package with love.',
      'experience.h4': 'Personal Care',
      'experience.p4': 'Port pickup, island tips, beach towels — Anna thinks of everything for you.',
      'experience.cap1': 'Pool with panoramic view',
      'experience.cap2': 'Homemade welcome package',
      'experience.cap3': 'Flower garden',
      'villas.tag': 'Accommodation',
      'villas.title': 'Our Villas',
      'villas.desc': 'Five Cycladic villas, each with its own personality — all with sea views, full amenities, and Anna\'s personal touch.',
      'villas.v1guests': 'Up to 3 guests',
      'villas.v2guests': 'Up to 4 guests',
      'villas.v3guests': 'Up to 5 guests',
      'villas.v4guests': 'Up to 7 guests',
      'villas.v5guests': 'Up to 4 guests',
      'villas.v1bed1': 'Bedroom: 2 single beds',
      'villas.v1bed2': 'Living room: 1 sofa bed',
      'villas.v2bed1': 'Bedroom 1: 2 single beds',
      'villas.v2bed2': 'Bedroom 2: 1 double bed',
      'villas.v3bed1': 'Bedroom 1: 1 single & 1 double bed',
      'villas.v3bed2': 'Bedroom 2: 2 single beds',
      'villas.v4bed1': 'Bedroom 1: 2 single beds',
      'villas.v4bed2': 'Bedroom 2: 2 single beds',
      'villas.v4bed3': 'Bedroom 3: 1 double bed',
      'villas.v4bed4': 'Living room: 1 sofa bed',
      'villas.v5bed1': 'Bedroom 1: 2 single beds',
      'villas.v5bed2': 'Bedroom 2: 1 large double bed',
      'villas.v1desc': 'Flower garden, sea view. Ideal for relaxation and tranquility.',
      'villas.v2desc': 'On a hillside with stunning sea views. The perfect spot for unforgettable sunsets.',
      'villas.v3desc': 'Sea view, close to Antiparos center. Ideal for family holidays.',
      'villas.v4desc': 'Large 2-level maisonette with stunning sea views. Ideal for large families or groups of friends.',
      'villas.v5desc': 'Comfortable semi-basement apartment that perfectly complements the maisonette, for larger groups.',
      'villas.garden': 'Garden',
      'villas.seaview': 'Sea view',
      'villas.hilltop': 'Hilltop',
      'villas.family': 'Family',
      'villas.twolevels': '2 Levels',
      'villas.groups': 'For groups',
      'villas.combinable': 'Combinable',
      'villas.maisonette': 'Maisonette',
      'villas.maisonette_label': '— Maisonette',
      'villas.cta': 'Ask about availability',
      'villas.amenities_title': 'All villas include',
      'villas.a1': 'Pool',
      'villas.a2': 'Full Kitchen',
      'villas.a3': 'Parking',
      'villas.a4': 'Beach Towels',
      'villas.a5': 'Washing Machine',
      'villas.a6': 'Daily Cleaning',
      'villas.a7': 'Welcome Package',
      'villas.a8': 'Port Pickup',
      'villas.a9': 'In-room Safe',
      'villas.a10': 'Heating',
      'villas.a11': 'Private Entrance',
      'villas.a12': 'Beach Umbrellas',
      'villas.a13': 'Soundproofing',
      'reviews.tag': 'Reviews',
      'reviews.title': 'What our guests say',
      'reviews.excellent': 'Excellent',
      'reviews.count': '30 reviews on Booking.com',
      'reviews.staff': 'Staff',
      'reviews.facilities': 'Facilities',
      'reviews.cleanliness': 'Cleanliness',
      'reviews.comfort': 'Comfort',
      'reviews.value': 'Value for money',
      'reviews.location': 'Location',
      'reviews.za': 'South Africa',
      'reviews.gr': 'Greece',
      'reviews.ch': 'Switzerland',
      'reviews.us': 'USA',
      'reviews.it': 'Italy',
      'reviews.fr': 'France',
      'reviews.de': 'Germany',
      'reviews.uk': 'United Kingdom',
      'reviews.r1': '"We absolutely loved everything about the accommodation! The positioning and view high on a hill overlooking Antiparos town and the ocean was breathtaking. Anna had kindly placed essential items in the fridge for us... this gesture is just another bit of detail which sets Anna\'s apartment from the rest. She and her family are very special people who can be very proud of what they have created on this magical island. Antiparos View was our last stop after 2 weeks in beautiful Greece and we both agree that we saved the best for last!"',
      'reviews.r2': '"The property was just amazing! Clean and perfectly located. Anna was the best host ever!! Thoughtful, polite with her home made pittas and desserts we were mesmerised."',
      'reviews.r3': '"The apartment is beautifully situated, offering stunning views of the sea and across to Paros. Each morning, I loved waking up and taking a swim in the spacious pool. The real highlight of the stay was Anna, the extraordinary host. Her warm hospitality and delicious homemade cakes truly made me feel at home."',
      'reviews.r4': '"The name says it all. The view is amazing. From the moment Anna picked us up at the ferry we felt valued. She had put eggs, bread and fruit in the kitchen. The swimming pool is beautiful and the perfect place to recover from our journey. We will definitely stay here again."',
      'reviews.r5': '"Perfect location, beautiful house, clean, cared for in every detail, welcome with homemade tart, biscuits, juices, coffee. Mrs. Anna of indescribable kindness. On departure she prepared two savory pies made by her. Never found so much... We will definitely return, highly recommended!"',
      'reviews.r6': '"The comfort, cleanliness, decoration and the owner\'s attentions were much appreciated! The amazing pool, the views are incredible and just 5 minutes from Antiparos port."',
      'reviews.r7': '"Great location, large terrace with table and chairs, sun loungers and a beautiful view. The apartment is very well equipped, many small attentions from the host and a super comfortable bed."',
      'reviews.r8': '"Warm welcome and beautiful views. Everything provided from beach towels to a stocked fridge. Best equipped stay I\'ve ever had in Greece."',
      'reviews.google_count': '35 reviews on Google',
      'reviews.r9': '"The best equipped place I have ever seen in Greece. Fresh fruit, eggs, bread, Nespresso, toiletries, beach umbrella, pool towels — too much to mention. A fresh cake was waiting on the table after cleaning. Amazing service. Owner Anna is a lovely hostess. Highly recommended especially for families."',
      'reviews.r10': '"AMAZING VIEWS! Nice patios for meals or views. Clean pool. Almost all amenities needed provided: kitchen utensils, towels AND beach towels, coffee makers, beach umbrellas. Watched the sunrise on our last day and just wanted to fall asleep outside. We\'d book this place again!"',
      'reviews.r11': '"Unbelievable location, perfect hostess Mrs. Anna, provided everything we needed for a carefree, relaxing and comfortable stay. When we go back to Antiparos, this is the only place we\'d want to stay."',
      'reviews.r12': '"Everything was wonderful, we had a fantastic time! Views of all Antiparos and Paros. The place has everything, cleaned daily, and Mrs. Anna welcomed us with warm Pasta Flora, Parian wine and traditional savory pies."',
      'reviews.r13': '"A balcony to the Aegean! Excellent accommodation with panoramic views of Antiparos and the western coastline of Paros. Perfectly and fully equipped apartments for a comfortable stay."',
      'antiparos.tag': 'Destination',
      'antiparos.title': 'Antiparos — The secret of the Cyclades',
      'antiparos.p1': 'Antiparos is a small island across from Paros, known for its authentic Cycladic atmosphere, crystal-clear beaches, and a tranquility hard to find elsewhere.',
      'antiparos.p2': 'Far from the crowds, Antiparos offers authentic experiences — from the cave with its stalactites to the beaches of Soros and Agios Georgios.',
      'antiparos.distances': 'Distances',
      'antiparos.d1': 'Antiparos Port — 1 km (2 minutes)',
      'antiparos.d2': 'Village center — 800m (10 min walk)',
      'antiparos.d3': 'Beaches — 2-8 km',
      'antiparos.d4': 'Antiparos Cave — 9 km',
      'antiparos.d5': 'Pounta Port (Paros↔Antiparos ferry) — 1.5 km',
      'antiparos.d6': 'Supermarket — 600m (8 min walk)',
      'antiparos.d7': 'Restaurants & bars — 800m (in the center)',
      'antiparos.d8': 'Paros Airport (PAS) — 15 km + ferry',
      'antiparos.beaches_title': 'Nearby Beaches',
      'antiparos.b1': 'Fragopapades',
      'antiparos.b2': 'Psaralyki',
      'antiparos.b3': 'Sifneiko',
      'antiparos.b4': 'Panagia',
      'antiparos.cafes_title': 'Restaurants & Bars',
      'antiparos.sights_title': 'Attractions',
      'antiparos.s1': 'Antiparos Cave',
      'antiparos.s2': 'Archaeological Museum of Paros',
      'antiparos.s3': 'Antiparos Castle',
      'pool.tag': 'Pool',
      'pool.title': 'The pool awaits you',
      'pool.desc': 'Wake up and dive into the pool with an endless view of the Aegean, Paros, and the channel. The moment every guest remembers.',
      'pool.cta': 'Ask about availability',
      'video.tag': 'Video',
      'video.title': 'Take a tour',
      'video.desc': 'A quick tour of Antiparos View — the views, the villas, the pool, and the garden.',
      'info.cancel_title': 'Cancellation Policy',
      'info.cancel': 'Free cancellation up to 14 days before arrival. Contact us for details.',
      'info.tag': 'Useful Info',
      'info.title': 'Stay Information',
      'info.season_title': 'Season',
      'info.season': 'May 1 — September 30',
      'info.checkin': 'Check-in: after 14:30<br>Check-out: by 12:00',
      'info.minstay_title': 'Minimum Stay',
      'info.minstay': 'July & August: 1 week<br>Check-in/out: Saturday or Sunday',
      'info.extra_title': 'Extra Person',
      'info.extra': '+€15 per night',
      'info.deposit_title': 'Deposit',
      'info.deposit': '30% within 7 days of booking',
      'info.pickup_title': 'Pickup',
      'info.pickup': 'Free port pickup — Anna or her daughter-in-law Emma will be waiting for you!',
      'faq.tag': 'FAQ',
      'faq.title': 'Useful Information',
      'faq.desc': 'Answers to the most frequently asked questions from our guests.',
      'faq.q1': 'Is breakfast served?',
      'faq.a1': 'Anna makes sure your fridge is stocked with homemade treats, fruits, and breakfast essentials upon arrival — a warm welcome you\'ll remember. There is no organized breakfast service, but the fully equipped kitchen gives you every option.',
      'faq.q2': 'Can I park there?',
      'faq.a2': 'Yes, free private parking is available on the property.',
      'faq.q3': 'Is there a swimming pool?',
      'faq.a3': 'Yes! Our pool with panoramic Aegean views is one of our guests\' favorite spots. Shared among all villas.',
      'faq.q4': 'What is the WiFi policy?',
      'faq.a4': 'Free WiFi throughout all indoor and outdoor areas.',
      'faq.q5': 'Is there an airport transfer service?',
      'faq.a5': 'Anna or her daughter-in-law Emma offer a free pickup at Antiparos port. For transfers from Paros Airport, contact us and we\'ll help you arrange your journey.',
      'faq.q6': 'Are there rooms with a private bathroom?',
      'faq.a6': 'Yes, all villas have a private bathroom with shower.',
      'faq.q7': 'Are there rooms with a balcony?',
      'faq.a7': 'Every villa has a private terrace or courtyard with a view — perfect for morning coffee overlooking the Aegean.',
      'faq.q8': 'Is there a restaurant?',
      'faq.a8': 'There is no on-site restaurant, but every villa has a fully equipped kitchen and there\'s a BBQ in the garden. Tavernas and restaurants are in Antiparos center, about 1.5 km away.',
      'faq.q9': 'What attractions and transport options are nearby?',
      'faq.a9': 'Antiparos Cave, beaches (Soros, Faneromeni), town center. There\'s a local bus and you can rent an ATV or car. The Pounta–Antiparos ferry runs every 30 minutes.',
      'faq.q10': 'Is there a spa?',
      'faq.a10': 'There is no spa, but the pool, garden, and tranquil landscape offer their own kind of relaxation.',
      'contact.tag': 'Contact',
      'contact.title': 'We look forward to hearing from you',
      'contact.desc': 'Send us a message or give us a call — Anna will be happy to answer any question you may have.',
      'contact.name': 'Full Name',
      'contact.email': 'Email',
      'contact.checkin_date': 'Arrival Date',
      'contact.checkout_date': 'Departure Date',
      'contact.guests': 'Number of Guests',
      'contact.villa_interest': 'Villa of Interest',
      'contact.villa_unsure': 'Not sure yet',
      'contact.message': 'Message',
      'contact.send': 'Send Message',
      'contact.whatsapp_text': 'Send a message now',
      'contact.phone': 'Phone',
      'contact.anna_text': 'Anna personally replies to every message. Don\'t hesitate to ask anything!',
      'footer.tagline': 'Antiparos, Cyclades, Greece — 84007'
    },
    it: {
      'nav.experience': 'Esperienza',
      'nav.villas': 'Le Ville',
      'nav.reviews': 'Recensioni',
      'nav.antiparos': 'Antiparos',
      'nav.info': 'Informazioni',
      'nav.faq': 'FAQ',
      'nav.contact': 'Contatti',
      'hero.badge': 'Eccellente',
      'hero.subtitle': 'Vista panoramica, ospitalità casalinga, momenti indimenticabili ad Antiparos',
      'hero.cta': 'Contattateci',
      'experience.tag': 'Ospitalità',
      'experience.title': 'Anna vi dà il benvenuto',
      'experience.desc': 'Ad Antiparos View non troverete un servizio impersonale. Anna, con la sua calorosa ospitalità, cura ogni dettaglio — dalla crostata fatta in casa che vi attende all\'arrivo, al frigorifero pieno e al pickup dal porto. Qui vi sentirete come a casa.',
      'experience.h1': 'Vista Panoramica',
      'experience.p1': 'Il Mar Egeo, Paros, il canale — la vista dalla vostra terrazza vi toglie il fiato ogni mattina.',
      'experience.h2': 'Piscina con Vista',
      'experience.p2': 'Un tuffo in piscina con vista infinita sull\'Egeo — il modo migliore per iniziare la mattina.',
      'experience.h3': 'Sapori Casalinghi',
      'experience.p3': 'Crostata fatta in casa, uova fresche, marmellata, frutta — Anna prepara il welcome package con amore.',
      'experience.h4': 'Cura Personale',
      'experience.p4': 'Pickup dal porto, consigli sull\'isola, asciugamani da spiaggia — Anna pensa a tutto per voi.',
      'experience.cap1': 'Piscina con vista panoramica',
      'experience.cap2': 'Welcome package fatto in casa',
      'experience.cap3': 'Giardino fiorito',
      'villas.tag': 'Alloggio',
      'villas.title': 'Le nostre Ville',
      'villas.desc': 'Cinque ville cicladiche, ognuna con la propria personalità — tutte con vista mare, servizi completi e il tocco personale di Anna.',
      'villas.v1guests': 'Fino a 3 ospiti',
      'villas.v2guests': 'Fino a 4 ospiti',
      'villas.v3guests': 'Fino a 5 ospiti',
      'villas.v4guests': 'Fino a 7 ospiti',
      'villas.v5guests': 'Fino a 4 ospiti',
      'villas.v1bed1': 'Camera: 2 letti singoli',
      'villas.v1bed2': 'Soggiorno: 1 divano letto',
      'villas.v2bed1': 'Camera 1: 2 letti singoli',
      'villas.v2bed2': 'Camera 2: 1 letto matrimoniale',
      'villas.v3bed1': 'Camera 1: 1 singolo e 1 matrimoniale',
      'villas.v3bed2': 'Camera 2: 2 letti singoli',
      'villas.v4bed1': 'Camera 1: 2 letti singoli',
      'villas.v4bed2': 'Camera 2: 2 letti singoli',
      'villas.v4bed3': 'Camera 3: 1 letto matrimoniale',
      'villas.v4bed4': 'Soggiorno: 1 divano letto',
      'villas.v5bed1': 'Camera 1: 2 letti singoli',
      'villas.v5bed2': 'Camera 2: 1 letto matrimoniale grande',
      'villas.v1desc': 'Giardino fiorito, vista mare. Ideale per relax e tranquillità.',
      'villas.v2desc': 'Sulla collina con vista mare mozzafiato. Il posto perfetto per tramonti indimenticabili.',
      'villas.v3desc': 'Vista mare, vicino al centro di Antiparos. Ideale per vacanze in famiglia.',
      'villas.v4desc': 'Grande maisonette a 2 livelli con vista mare mozzafiato. Ideale per famiglie numerose o gruppi di amici.',
      'villas.v5desc': 'Comodo appartamento seminterrato che completa perfettamente la maisonette, per gruppi più grandi.',
      'villas.garden': 'Giardino',
      'villas.seaview': 'Vista mare',
      'villas.hilltop': 'Collina',
      'villas.family': 'Famiglia',
      'villas.twolevels': '2 Livelli',
      'villas.groups': 'Per gruppi',
      'villas.combinable': 'Combinabile',
      'villas.maisonette': 'Maisonette',
      'villas.maisonette_label': '— Maisonette',
      'villas.cta': 'Chiedi disponibilità',
      'villas.amenities_title': 'Tutte le ville includono',
      'villas.a1': 'Piscina',
      'villas.a2': 'Cucina Completa',
      'villas.a3': 'Parcheggio',
      'villas.a4': 'Asciugamani Spiaggia',
      'villas.a5': 'Lavatrice',
      'villas.a6': 'Pulizia Giornaliera',
      'villas.a7': 'Welcome Package',
      'villas.a8': 'Pickup dal Porto',
      'villas.a9': 'Cassaforte',
      'villas.a10': 'Riscaldamento',
      'villas.a11': 'Ingresso Privato',
      'villas.a12': 'Ombrelloni da Spiaggia',
      'villas.a13': 'Isolamento Acustico',
      'reviews.tag': 'Recensioni',
      'reviews.title': 'Cosa dicono i nostri ospiti',
      'reviews.excellent': 'Eccellente',
      'reviews.count': '30 recensioni su Booking.com',
      'reviews.staff': 'Personale',
      'reviews.facilities': 'Strutture',
      'reviews.cleanliness': 'Pulizia',
      'reviews.comfort': 'Comfort',
      'reviews.value': 'Rapporto qualità/prezzo',
      'reviews.location': 'Posizione',
      'reviews.za': 'Sudafrica',
      'reviews.gr': 'Grecia',
      'reviews.ch': 'Svizzera',
      'reviews.us': 'USA',
      'reviews.it': 'Italia',
      'reviews.fr': 'Francia',
      'reviews.de': 'Germania',
      'reviews.uk': 'Regno Unito',
      'reviews.r1': '"Abbiamo amato tutto dell\'alloggio! La posizione e la vista dall\'alto sulla città di Antiparos e l\'oceano erano mozzafiato. Anna aveva gentilmente messo prodotti essenziali in frigo per noi... questo gesto è un altro dettaglio che distingue l\'appartamento di Anna dagli altri. Lei e la sua famiglia sono persone molto speciali. Antiparos View è stata la nostra ultima tappa dopo 2 settimane in Grecia e siamo d\'accordo che abbiamo tenuto il meglio per ultimo!"',
      'reviews.r2': '"La proprietà era semplicemente fantastica! Pulita e in posizione perfetta. Anna è stata la migliore ospite di sempre!! Premurosa, gentile — con le sue torte e dolci fatti in casa ci ha incantato."',
      'reviews.r3': '"L\'appartamento è splendidamente situato, con viste mozzafiato sul mare e verso Paros. Ogni mattina amavo svegliarmi e fare una nuotata nella grande piscina. Il vero punto forte del soggiorno è stata Anna, un\'ospite straordinaria. La sua calorosa ospitalità e le deliziose torte fatte in casa mi hanno fatto sentire a casa."',
      'reviews.r4': '"Il nome dice tutto. La vista è incredibile. Dal momento in cui Anna ci ha preso al traghetto ci siamo sentiti speciali. Aveva messo uova, pane e frutta in cucina. La piscina è bellissima e il posto perfetto per riprendersi dal viaggio. Torneremo sicuramente."',
      'reviews.r5': '"Posizione perfetta, casa bellissima, pulita, curata in tutto, accoglienza con crostata fatta in casa, biscotti, succhi, caffè. La Sig.ra Anna di una gentilezza indescrivibile. Alla partenza ci ha preparato due torte salate fatte da lei. Mai trovato tanto... Torneremo sicuramente, consigliatissimo!"',
      'reviews.r6': '"Il comfort, la pulizia, la decorazione e le attenzioni della proprietaria sono state molto apprezzate! La fantastica piscina, la vista sono incredibili e a soli 5 minuti dal porto di Antiparos."',
      'reviews.r7': '"Ottima posizione, grande terrazza con tavolo e sedie, lettini e una vista meravigliosa. L\'appartamento è molto ben attrezzato, tante piccole attenzioni da parte dell\'ospite e un letto super comodo."',
      'reviews.r8': '"Caloroso benvenuto e viste bellissime. Tutto fornito, dagli asciugamani da spiaggia al frigorifero pieno. Il soggiorno più attrezzato che abbia mai avuto in Grecia."',
      'reviews.google_count': '35 recensioni su Google',
      'reviews.r9': '"Il posto più attrezzato che abbia mai visto in Grecia. Frutta fresca, uova, pane, Nespresso, articoli da bagno, ombrellone, teli piscina — troppo da menzionare. Una torta fresca mi aspettava sul tavolo dopo la pulizia. Servizio incredibile. Anna è un\'ospite meravigliosa. Consigliatissimo per le famiglie."',
      'reviews.r10': '"VISTE INCREDIBILI! Bei patii per pasti o panorami. Piscina pulita. Quasi tutti i comfort forniti: utensili da cucina, asciugamani E teli mare, macchine del caffè, ombrelloni. Abbiamo visto l\'alba l\'ultimo giorno e volevamo solo addormentarci fuori. Lo prenoteremmo di nuovo!"',
      'reviews.r11': '"Posizione incredibile, padrona di casa perfetta la Sig.ra Anna, ci ha fornito tutto il necessario per un soggiorno spensierato, rilassante e confortevole. Quando torneremo ad Antiparos, è l\'unico posto dove vorremmo stare."',
      'reviews.r12': '"Tutto meraviglioso, ci siamo divertiti tantissimo! Vista su tutta Antiparos e Paros. Il posto ha tutto, pulizia giornaliera, e la Sig.ra Anna ci ha accolto con Pasta Flora calda, vino di Paros e tradizionali torte salate."',
      'reviews.r13': '"Un balcone sull\'Egeo! Alloggio eccellente con vista panoramica su Antiparos e sulla costa occidentale di Paros. Appartamenti perfettamente e completamente attrezzati per un soggiorno confortevole."',
      'antiparos.tag': 'Destinazione',
      'antiparos.title': 'Antiparos — Il segreto delle Cicladi',
      'antiparos.p1': 'Antiparos è una piccola isola di fronte a Paros, conosciuta per la sua autentica atmosfera cicladica, le spiagge cristalline e una tranquillità difficile da trovare altrove.',
      'antiparos.p2': 'Lontano dalla folla, Antiparos offre esperienze autentiche — dalla grotta con le stalattiti alle spiagge di Soros e Agios Georgios.',
      'antiparos.distances': 'Distanze',
      'antiparos.d1': 'Porto di Antiparos — 1 km (2 minuti)',
      'antiparos.d2': 'Centro paese — 800m (10 min a piedi)',
      'antiparos.d3': 'Spiagge — 2-8 km',
      'antiparos.d4': 'Grotta di Antiparos — 9 km',
      'antiparos.d5': 'Porto di Pounta (traghetto Paros↔Antiparos) — 1.5 km',
      'antiparos.d6': 'Supermercato — 600m (8 min a piedi)',
      'antiparos.d7': 'Ristoranti & bar — 800m (nel centro)',
      'antiparos.d8': 'Aeroporto di Paros (PAS) — 15 km + traghetto',
      'antiparos.beaches_title': 'Spiagge Vicine',
      'antiparos.b1': 'Fragopapades',
      'antiparos.b2': 'Psaralyki',
      'antiparos.b3': 'Sifneiko',
      'antiparos.b4': 'Panagia',
      'antiparos.cafes_title': 'Ristoranti & Bar',
      'antiparos.sights_title': 'Attrazioni',
      'antiparos.s1': 'Grotta di Antiparos',
      'antiparos.s2': 'Museo Archeologico di Paros',
      'antiparos.s3': 'Castello di Antiparos',
      'pool.tag': 'Piscina',
      'pool.title': 'La piscina vi aspetta',
      'pool.desc': 'Svegliatevi e tuffatevi nella piscina con vista infinita sull\'Egeo, Paros e il canale. Il momento che ogni ospite ricorda.',
      'pool.cta': 'Chiedi disponibilità',
      'video.tag': 'Video',
      'video.title': 'Visitate il nostro spazio',
      'video.desc': 'Un breve tour di Antiparos View — la vista, le ville, la piscina e il giardino.',
      'info.cancel_title': 'Politica di Cancellazione',
      'info.cancel': 'Cancellazione gratuita fino a 14 giorni prima dell\'arrivo. Contattateci per dettagli.',
      'info.tag': 'Info Utili',
      'info.title': 'Informazioni sul Soggiorno',
      'info.season_title': 'Stagione',
      'info.season': '1 Maggio — 30 Settembre',
      'info.checkin': 'Check-in: dopo le 14:30<br>Check-out: entro le 12:00',
      'info.minstay_title': 'Soggiorno Minimo',
      'info.minstay': 'Luglio & Agosto: 1 settimana<br>Check-in/out: Sabato o Domenica',
      'info.extra_title': 'Persona Extra',
      'info.extra': '+€15 a notte',
      'info.deposit_title': 'Caparra',
      'info.deposit': '30% entro 7 giorni dalla prenotazione',
      'info.pickup_title': 'Pickup',
      'info.pickup': 'Pickup gratuito dal porto — Anna o sua nuora Emma vi aspetteranno!',
      'faq.tag': 'Domande Frequenti',
      'faq.title': 'Informazioni Utili',
      'faq.desc': 'Risposte alle domande più frequenti dei nostri ospiti.',
      'faq.q1': 'La colazione è servita?',
      'faq.a1': 'Anna si assicura che il frigorifero sia pieno di dolci fatti in casa, frutta e prodotti per la colazione al vostro arrivo — un caloroso benvenuto che ricorderete. Non c\'è un servizio di colazione organizzato, ma la cucina completamente attrezzata vi offre ogni possibilità.',
      'faq.q2': 'Posso parcheggiare lì?',
      'faq.a2': 'Sì, è disponibile un parcheggio privato gratuito nella proprietà.',
      'faq.q3': 'C\'è una piscina?',
      'faq.a3': 'Sì! La nostra piscina con vista panoramica sull\'Egeo è uno dei luoghi preferiti dai nostri ospiti. Condivisa tra tutte le ville.',
      'faq.q4': 'Qual è la politica riguardo al WiFi?',
      'faq.a4': 'WiFi gratuito in tutte le aree interne ed esterne.',
      'faq.q5': 'C\'è un servizio di trasferimento dall\'aeroporto?',
      'faq.a5': 'Anna o sua nuora Emma vi aspettano con un pickup gratuito al porto di Antiparos. Per il trasferimento dall\'aeroporto di Paros, contattateci e vi aiuteremo a organizzare il viaggio.',
      'faq.q6': 'Ci sono camere con bagno privato?',
      'faq.a6': 'Sì, tutte le ville dispongono di bagno privato con doccia.',
      'faq.q7': 'Ci sono camere con balcone?',
      'faq.a7': 'Ogni villa ha una terrazza o cortile privato con vista — perfetto per il caffè del mattino con vista sull\'Egeo.',
      'faq.q8': 'C\'è un ristorante?',
      'faq.a8': 'Non c\'è un ristorante nella proprietà, ma ogni villa ha una cucina completamente attrezzata e c\'è un BBQ nel giardino. Taverne e ristoranti si trovano nel centro di Antiparos, a circa 1,5 km.',
      'faq.q9': 'Quali attrazioni e opzioni di trasporto ci sono nelle vicinanze?',
      'faq.a9': 'Grotta di Antiparos, spiagge (Soros, Faneromeni), centro del paese. C\'è un autobus locale e si possono noleggiare ATV o auto. Il traghetto Pounta–Antiparos parte ogni 30 minuti.',
      'faq.q10': 'C\'è una spa?',
      'faq.a10': 'Non c\'è una spa, ma la piscina, il giardino e la tranquillità del paesaggio offrono il loro tipo di relax.',
      'contact.tag': 'Contatti',
      'contact.title': 'Vi aspettiamo',
      'contact.desc': 'Inviateci un messaggio o chiamateci — Anna sarà felice di rispondere a qualsiasi vostra domanda.',
      'contact.name': 'Nome e Cognome',
      'contact.email': 'Email',
      'contact.checkin_date': 'Data di Arrivo',
      'contact.checkout_date': 'Data di Partenza',
      'contact.guests': 'Numero di Ospiti',
      'contact.villa_interest': 'Villa di Interesse',
      'contact.villa_unsure': 'Non sono sicuro/a',
      'contact.message': 'Messaggio',
      'contact.send': 'Invia Messaggio',
      'contact.whatsapp_text': 'Invia un messaggio ora',
      'contact.phone': 'Telefono',
      'contact.anna_text': 'Anna risponde personalmente a ogni messaggio. Non esitate a chiedere qualsiasi cosa!',
      'footer.tagline': 'Antiparos, Cicladi, Grecia — 84007'
    }
  };

  let currentLang = 'el';

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang === 'el' ? 'el' : lang === 'it' ? 'it' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var text = translations[lang][key];
      if (text !== undefined) {
        if (text.includes('<br>')) {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('apv-lang', lang);
  }

  // ── Navbar ────────────────────────────────

  var navbar = document.getElementById('navbar');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  var navOverlay;

  function createOverlay() {
    navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);
    navOverlay.addEventListener('click', closeNav);
  }

  function closeNav() {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
    if (navOverlay) navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function toggleNav() {
    var isOpen = navLinks.classList.contains('active');
    if (isOpen) {
      closeNav();
    } else {
      navToggle.classList.add('active');
      navLinks.classList.add('active');
      if (navOverlay) navOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  createOverlay();
  navToggle.addEventListener('click', toggleNav);

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  var lastScroll = 0;
  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 50);
    lastScroll = scrollY;
  }, { passive: true });

  // ── Language Switcher ─────────────────────

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(this.getAttribute('data-lang'));
    });
  });

  var savedLang = localStorage.getItem('apv-lang');
  if (savedLang && translations[savedLang]) {
    setLanguage(savedLang);
  }

  // ── Reviews Carousel ──────────────────────

  var track = document.querySelector('.reviews-track');
  var cards = document.querySelectorAll('.review-card');
  var prevBtn = document.querySelector('.carousel-prev');
  var nextBtn = document.querySelector('.carousel-next');
  var dotsContainer = document.getElementById('carouselDots');
  var currentSlide = 0;

  function getVisibleCount() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function getMaxSlide() {
    return Math.max(0, cards.length - getVisibleCount());
  }

  function buildDots() {
    dotsContainer.innerHTML = '';
    var total = getMaxSlide() + 1;
    for (var i = 0; i < total; i++) {
      var dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === currentSlide ? ' active' : '');
      dot.setAttribute('aria-label', 'Slide ' + (i + 1));
      dot.dataset.index = i;
      dot.addEventListener('click', function () {
        goToSlide(parseInt(this.dataset.index));
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateCarousel() {
    var cardWidth = cards[0].offsetWidth;
    var gap = 24;
    var offset = currentSlide * (cardWidth + gap);
    track.style.transform = 'translateX(-' + offset + 'px)';

    dotsContainer.querySelectorAll('.carousel-dot').forEach(function (dot, i) {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function goToSlide(index) {
    currentSlide = Math.min(Math.max(0, index), getMaxSlide());
    updateCarousel();
  }

  prevBtn.addEventListener('click', function () {
    goToSlide(currentSlide - 1);
  });

  nextBtn.addEventListener('click', function () {
    goToSlide(currentSlide + 1);
  });

  buildDots();
  updateCarousel();

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (currentSlide > getMaxSlide()) currentSlide = getMaxSlide();
      buildDots();
      updateCarousel();
    }, 150);
  });

  // Auto-play carousel — 2 cards every 3 seconds
  var autoplayInterval = setInterval(function () {
    if (currentSlide >= getMaxSlide()) {
      goToSlide(0);
    } else {
      goToSlide(Math.min(currentSlide + 2, getMaxSlide()));
    }
  }, 3000);

  function startAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(function () {
      if (currentSlide >= getMaxSlide()) {
        goToSlide(0);
      } else {
        goToSlide(Math.min(currentSlide + 2, getMaxSlide()));
      }
    }, 3000);
  }

  track.addEventListener('mouseenter', function () {
    clearInterval(autoplayInterval);
  });

  track.addEventListener('mouseleave', function () {
    startAutoplay();
  });

  // Touch swipe support
  var touchStartX = 0;
  var touchEndX = 0;
  track.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
    clearInterval(autoplayInterval);
  }, { passive: true });

  track.addEventListener('touchend', function (e) {
    touchEndX = e.changedTouches[0].screenX;
    var diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToSlide(currentSlide + 1);
      else goToSlide(currentSlide - 1);
    }
  }, { passive: true });

  // ── Scroll Reveal (lightweight AOS) ───────

  function revealElements() {
    var elements = document.querySelectorAll('[data-aos]');
    var windowHeight = window.innerHeight;

    elements.forEach(function (el) {
      var top = el.getBoundingClientRect().top;
      var threshold = windowHeight * 0.85;
      if (top < threshold) {
        el.classList.add('aos-animate');
      }
    });
  }

  window.addEventListener('scroll', revealElements, { passive: true });
  revealElements();

  // ── Score bar animation ───────────────────

  function animateScoreBars() {
    var bars = document.querySelectorAll('.score-bar-fill');
    var observed = false;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !observed) {
          observed = true;
          bars.forEach(function (bar) {
            var width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(function () {
              bar.style.width = width;
            }, 100);
          });
        }
      });
    }, { threshold: 0.3 });

    var scoreSection = document.querySelector('.reviews-score');
    if (scoreSection) observer.observe(scoreSection);
  }

  animateScoreBars();

  // ── Contact Form ──────────────────────────

  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var formData = new FormData(form);
      var name = formData.get('name');
      var email = formData.get('email');
      var checkin = formData.get('checkin');
      var checkout = formData.get('checkout');
      var guests = formData.get('guests');
      var villa = formData.get('villa');
      var message = formData.get('message');

      var subject = encodeURIComponent('Inquiry from ' + name + ' — Antiparos View Villas');
      var body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Check-in: ' + (checkin || 'N/A') + '\n' +
        'Check-out: ' + (checkout || 'N/A') + '\n' +
        'Guests: ' + guests + '\n' +
        'Villa: ' + (villa || 'Any') + '\n\n' +
        'Message:\n' + (message || '')
      );

      window.location.href = 'mailto:info@antiparosview.gr?subject=' + subject + '&body=' + body;

      var successMessages = {
        el: { title: 'Ευχαριστούμε!', text: 'Το μήνυμά σας ετοιμάστηκε. Η Anna θα απαντήσει σύντομα!' },
        en: { title: 'Thank you!', text: 'Your message has been prepared. Anna will reply shortly!' },
        it: { title: 'Grazie!', text: 'Il vostro messaggio è stato preparato. Anna risponderà presto!' }
      };

      var msg = successMessages[currentLang] || successMessages.en;

      form.innerHTML =
        '<div class="form-success">' +
        '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>' +
        '<h3>' + msg.title + '</h3>' +
        '<p>' + msg.text + '</p>' +
        '</div>';
    });
  }

  // ── FAQ Accordion ─────────────────────────

  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.parentElement;
      var isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item.active').forEach(function (el) {
        el.classList.remove('active');
        el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        item.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ── Villa image sliders ──────────────────
  document.querySelectorAll('.villa-slider').forEach(function (slider) {
    var track = slider.querySelector('.slider-track');
    var images = track.querySelectorAll('img');
    var prevBtn = slider.querySelector('.slider-prev');
    var nextBtn = slider.querySelector('.slider-next');
    var counterCurrent = slider.querySelector('.slider-current');
    var total = images.length;
    var current = 0;

    function goTo(idx) {
      if (idx < 0) idx = total - 1;
      if (idx >= total) idx = 0;
      current = idx;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      counterCurrent.textContent = current + 1;
    }

    prevBtn.addEventListener('click', function (e) { e.stopPropagation(); goTo(current - 1); });
    nextBtn.addEventListener('click', function (e) { e.stopPropagation(); goTo(current + 1); });

    var startX = 0;
    slider.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend', function (e) {
      var diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
    });
  });

  // ── Video placeholder ──────────────────────

  var videoPlaceholder = document.getElementById('videoPlaceholder');
  var propertyVideo = document.getElementById('propertyVideo');
  if (videoPlaceholder && propertyVideo) {
    videoPlaceholder.addEventListener('click', function () {
      this.classList.add('hidden');
      propertyVideo.controls = true;
      propertyVideo.play();
    });
    propertyVideo.addEventListener('ended', function () {
      this.controls = false;
      videoPlaceholder.classList.remove('hidden');
    });
  }

  // ── Amenity tag translation (preserve SVG) ──

  var originalAmenityHTML = {};
  document.querySelectorAll('.amenity-tag[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    var svg = el.querySelector('svg');
    if (svg) {
      originalAmenityHTML[key] = svg.outerHTML;
    }
  });

  var origSetLanguage = setLanguage;
  setLanguage = function (lang) {
    origSetLanguage(lang);
    document.querySelectorAll('.amenity-tag[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var svgHTML = originalAmenityHTML[key];
      if (svgHTML && translations[lang] && translations[lang][key]) {
        el.innerHTML = svgHTML + ' ' + translations[lang][key];
      }
    });
  };

  // ── Smooth scroll for anchor links ────────

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 80;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

})();
