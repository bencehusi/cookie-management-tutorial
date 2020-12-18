<template>
    <div class="cookie-consent">
        <l-dialog
            v-model="cookieDialogOpen"
            :dismissable="consentComplete"
        >
            <template #activator="{ activate }">
                <div class="clickable footer__cookie" @click="activate">Cookie settings</div>
            </template>
            <template #header>
                <h4 class="heading-4">Do you like cookies?</h4>
            </template>
            <p class="mb-double">Because we do. And we use them to optimize your shopping experience. Read more about how exaclty.</p>
            <div class="consent__row">
                <div class="consent__label">Necessary</div>
                <LToggle
                    name="necessary"
                    v-model="necessaryConsent"
                />
            </div> <!-- Necessary Selector -->
            <div class="consent__row">
                <div class="consent__label">Statistics</div>
                <LToggle
                    name="statistics"
                    v-model="statisticsConsent"
                />
            </div> <!-- Statistics Selector -->
            <div class="consent__row">
                <div class="consent__label">Marketing</div>
                <LToggle
                    name="marketing"
                    v-model="marketingConsent"
                />
            </div> <!-- Marketing Selector -->
            <template #actions>
                <div class="vertical-spacer"></div>
                <button @click="cookieDialogOpen = false" class="cta secondary mr-half">Cancel</button>
                <button @click="saveConsent" class="cta primary">Save settings</button>
            </template>
        </l-dialog>
        <l-dialog
            v-model="saveconfirmationDialogOpen"
            snackbar
            :timeout="5000"
        >
            <template #header>
                <h4 class="heading-4">Sweet! We've saved your choices.</h4>
            </template>
            <p class="mb-reset">You can always modify your consent by clicking "Cookie settings" below ↓ in the footer.</p>
            <!-- <template #actions>
                <div class="vertical-spacer"></div>
                <button @click="cookieDialogOpen = false" class="cta primary">Close</button>
            </template> -->
        </l-dialog>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'LCookieConsent',
    data () {
        return {
            cookieDialogOpen: true,
            saveconfirmationDialogOpen: false,
            confirmationDelayTimeout: null,
            consentComplete: false
        }
    },
    computed: {
        ...mapGetters({
            getNecessary: 'consent/getNecessary',
            getStatistics: 'consent/getStatistics',
            getMarketing: 'consent/getMarketing'
        }),
        necessaryConsent: {
            get () {
                return this.getNecessary
            },
            set (newValue) {
                this.setNecessary(newValue)
            }
        },
        statisticsConsent: {
            get () {
                return this.getStatistics
            },
            set (newValue) {
                this.setStatistics(newValue)
            }
        },
        marketingConsent: {
            get () {
                return this.getMarketing
            },
            set (newValue) {
                this.setMarketing(newValue)
            }
        },
    },
    methods: {
        ...mapMutations({
            setNecessary: 'consent/setNecessary',
            setStatistics: 'consent/setStatistics',
            setMarketing: 'consent/setMarketing'
        }),
        saveConsent () {
            this.cookieDialogOpen = false
            this.consentComplete = true
            this.confirmationDelayTimeout = setTimeout(() => {
                this.saveconfirmationDialogOpen = true
                clearTimeout(this.confirmationDelayTimeout)
            }, 200)
        }
    }
}
</script>