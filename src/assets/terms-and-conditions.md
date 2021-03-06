
## Όροι χρήσης

To tick-n-vote είναι μία πρωτότυπη υπηρεσία διεξαγωγής ηλεκτρονικών ψηφοφοριών προκαθορισμένου κοινού. Ανήκει στην κατηγορία των λογισμικών ανοικτού κώδικα και φιλοξενείται στην πλατφόρμα εργασιών ανοικτού κώδικα github.com.

[https://github.com/themost-framework/ticket-voting](https://github.com/themost-framework/ticket-voting)

Αναπτύχθηκε για να καλύψει τις ανάγκες διεξαγωγής μιας ψηφοφορίας όπως οι εκλογές ενός συλλόγου γονέων και κηδεμόνων κ.α. και διατίθεται στα πλαίσια της εκμάθησης της πλατφόρμας MOST Web Framework Codename Blueshift για εκπαιδευτικούς σκοπούς.

Η αδειοδότησή της ακολουθεί το πρότυπο BSD-3-Clause:

Copyright (c) 2020, THEMOST LP
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

**Υποβολή υποψηφιότητας**

Μετά την δημιουργία μιας νέας ψηφοφορίας και τον ορισμό των περιόδων υποβολής υποψηφιότητας και διενέργειας της ψηφοφορίας ξεκινά η επικοινωνία με τους χρήστες που θα λάβουν μέρος σε αυτήν. 

Ο σύνδεσμος κατάθεσης υποψηφιότητας πρέπει να κοινοποιηθεί στις ενδιαφερόμενους έτσι ώστε να κατάθεσουν την υποψηφιότητά τους για αυτήν την εκλογική διαδικασία.

Ακολουθώντας τον σύνδεσμο αυτό οι χρήστες πηγαίνουν στη σελίδα υποβολής όπου μπορούν να συμπληρώσουν τα στοιχεία τους καθώς επίσης και μία σύντομη περιγραφή της υποψηφιότητάς τους.

**Εκλογική διαδικασία**

Η εκλογική διαδικασία υλοποιείται με απόλυτο και αυστηρό κριτήριο ​την τήρηση της ανωνυμίας του ψηφοφόρου και της επιλογής του​. Για τον σκοπό αυτό όλοι οι συμμετέχοντες λαμβάνουν ένα μήνυμα ηλεκτρονικού ταχυδρομείου το οποίο περιέχει έναν μοναδικό και προσωπικό σύνδεσμο για την κατάθεση της επιλογής.

Μπορούν να χρησιμοποιήσουν το παραπάνω κλειδί, το οποίο τους κοινοποιείται μέσω μηνύματος ηλεκτρονικού ταχυδρομείου, και να ολοκληρώσουν την επιλογή τους για την εκλογική διαδικασία στην οποία αναφέρεται.

Κατά την κατάθεση της επιλογής δεν δημιουργείται καμία απολύτως σύνδεση του ψηφοφόρου με την επιλογή του. Αυτή η διαδικασία είναι απολύτως ανώνυμη και μη αναστρέψιμη. Το ηλεκτρονικό κλειδί απενεργοποιείται αυτόματα και ο χρήστης δεν επιτρέπεται να το χρησιμοποιήσει ξανά.

**Χρήση της υπηρεσιας**

Ο όρος "χρήση της υπηρεσίας" αναφέρεται σε τρείς βασικές ομάδες χρηστών και τις ενέργειες που ολοκληρώνουν στα πλαίσια της υπηρεσίας tick-n-vote.

**Α. Διαχειριστές ψηφοφορίας**

Ως διαχειρίστής της ψηφοφορίας ορίζεται ο εκπρόσωπος οποιουδήποτε οργανισμού που μετά από απόφαση του οργανισμού για την χρήση της υπηρεσίας tick-n-vote με σκοπό την διενέργεια
ηλεκτρονικής ψηφοφορίας ορίζει τα στοιχεία αυτής -τίτλος, έναρξη, λήξη κτλ- και τροφοδοτεί την υπηρεσία με τις πληροφορίες της ομάδας χρηστών με δικαίωμα ψήφου.

Με την χρήση της υπηρεσίας δηλώνετε ότι λάβατε γνώση και αποδέχεστε τα ακόλουθα:

1. Τα στοιχεία της ψηφοφορίας θα τηρηθούν στην βάση δεδομένων της υπηρεσίας από την ημερομηνία υποβολής και για (1) μήνα μετά το τέλος της διαδικασίας ψηφοφορίας έτσι όπως αυτή ορίζεται στις ιδιότητες της ψηφοφορίας.

2. Οι διεθύνσεις ηλεκτρονικού ταχυδρομείου που αφορούν στους ψηοφοφόρους ελήφθησαν μέσα από τις διαδικασίες του οργανισμού, συλλόγου κτλ αφορούν αποκλειστικά σε πρόσωπα που σχετίζονται με τον οργανισμό, σύλλογο σύμφωνα με το καταστατικό του.

3. Οι ψηφοφόροι θα λάβουν μέσω ηλεκτρονικού ταχυδρομείου ένα μοναδικό προσωπικό κλειδί το οποίο δίνει το δικαίωμα ανώνυμης κατάθεσης της επιλογής μόνον μία φορά. Το κλειδί αυτό δεν μπορεί να εκδοθεί για κανέναν από τους χρήστες που ανήκουν στην ομάδα χρηστών με δικαίωμα ψήφου μετά την έναρξη της ψηφοφορίας.

4. Τα προσωπικά στοιχεία των υποψηφίων που συμπληρώνουν στην αίτηση υποψηφιότητας -πλην της διεύθυνσης ηλεκτρονικού ταχυδρομείου- θα είναι διαθέσιμα στην ομάδα χρηστών με δικαίωμα ψήφου στην ψηφοφορία.

5. Τα αποτελέσματα της ψηφοφορίας ανανεώνονται κατά την διάρκεια της εκλογικής διαδικασίας και είναι διαθέσιμα από την σελίδα εμφάνισης αποτελεσμάτων σε πραγματικό χρόνο.

**Β. Υποψήφιοι ψηφοφορίας**

Με την χρήση της υπηρεσίας δηλώνετε ότι λάβατε γνώση και αποδέχεστε τα ακόλουθα:

1. Τα προσωπικά στοιχεία που συμπληρώνετε στην αίτηση υποψηφιότητας -πλην της διεύθυνσης ηλεκτρονικού ταχυδρομείου- θα είναι διαθέσιμα στους ψηφοφόρους της εκλογικής διαδικασίας για την οποία υποβάλλετε υποψηφιότητα.

2. Το κείμενο περιγραφής της υποψηφιότητας θα είναι οράτο στους ψηφοφόρους της υπηρεσίας. Το κείμενο αυτό είναι προαιρετικό και μπορείτε να το αγνοήσετε αν επιθυμείτε. Με την συμπλήρωση του αποδέχεστε ότι οποιαδήποτε προσωπικά δεδομένα ή άλλα δεδομένα που υπάρχουν σε αυτό θα είναι προσβάσιμα σε τρίτους -στους ψηφοφόρους και διαχειριστές της ψηφοφορίας-.

2. Τα στοιχεία αυτά θα τηρηθούν στην βάση δεδομένων της υπηρεσίας από την ημερομηνία υποβολής της αίτησής σας και για (1) μήνα μετά το τέλος της διαδικασίας ψηφοφορίας έτσι όπως αυτή ορίζεται από τους διαχειριστές της ψηφοφορίας.

3. Με την δήλωση της διεύθυνσης ηλεκτρονικού ταχυδρομείου σας αποδέχεστε ότι θα λαμβάνετε ειδοποιήσεις σχετικά με την υποψηφιότητά σας.

4. Το ονοματέπωνυμό σας θα είναι οράτο στη λίστα αποτελεσμάτων πραγματικού χρόνου της εκλογικής διαδικασίας για την οποία υποβάλλετε υποψηφιότητα.

**Γ. Ψηφοφόροι**

1. Η διεύθυνση ηλεκτρονικού ταχυδρομείου σας θα χρησιμοποιηθεί για λήψη ειδοποίησεων σχετικά με την εκλογική διαδικασία για την οποία έχετε οριστεί ότι ανήκετε στην ομάδα χρηστών με δικαίωμα ψήφου.

2. Το μοναδικό κλείδι που θα σας δώσει το δικαίωμα υποβολής επιλογών είναι απολύτως προσωπικό και δεν πρέπει να το κοινοποιήσετε μέσω οποιοδήποτε μηνύματος ή προφορικά σε τρίτους.

3. Το μοναδικό κλείδι που θα σας δώσει το δικαίωμα υποβολής επιλογών δεν μπορεί να εκδοθεί ξανά μετά την έναρξη της ψηφοφορίας.

4. Το μοναδικό κλειδί υποβολής μπορεί να χρησιμοποιηθεί μόνον μία φορά και απενεργοποιείται αυτόματα μετά την χρήση του.

5. Αν για οποιοδήποτε λόγο πιστεύετε ότι δεν σχετίζεστε με τον οργανισμό, σύλλογο κτλ ο οποίος διενεργεί μία εκλογική διαδικασία, μπορείτε να πληροφορήσετε τον οργανισμό, σύλλογο για την απενεργοποιήση του μοναδικού κλειδιού πριν από την έναρξη της ψηφοφορίας. Ο διαχειριστής της ψηφοφορίας θα ενεργήσει για την απενεργοποίησή του.
