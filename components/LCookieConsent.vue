<template>
    <l-dialog v-model="cookieDialogOpen">
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
            <button class="cta primary">Save settings</button>
        </template>
    </l-dialog>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'LCookieConsent',
    data () {
        return {
            cookieDialogOpen: true
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
        })
    }
}
</script>