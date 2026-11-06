<script setup>
import { ref } from 'vue'
import resume from './data/resume.js'
import { useSidebar } from './composables/useSidebar.js'
import UnderConstruction from './components/ui/UnderConstruction.vue'
import StarryBackground from './components/ui/StarryBackground.vue'

const showUnderConstruction = ref(true)

const { open: sidebarOpen } = useSidebar()

import PrintButton from './components/ui/PrintButton.vue'
import ThemePicker from './components/ui/ThemePicker.vue'

import SidebarToggle from './components/layout/SidebarToggle.vue'
import AppSidebar from './components/layout/AppSidebar.vue'
import AppMain from './components/layout/AppMain.vue'
import ResumeHeader from './components/layout/ResumeHeader.vue'

import ContactCard from './components/sidebar/ContactCard.vue'
import SocialCard from './components/sidebar/SocialCard.vue'
import InterestsCard from './components/sidebar/InterestsCard.vue'

import ProfileSection from './components/sections/ProfileSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import CoursesSection from './components/sections/CoursesSection.vue'
</script>

<template>
  <div
    class="relative flex min-h-screen flex-col bg-paper font-sans text-fg lg:grid lg:h-screen lg:overflow-hidden lg:transition-[grid-template-columns] lg:duration-500 lg:ease-in-out print:block! print:h-auto print:min-h-0 print:overflow-visible print:bg-white"
    :class="sidebarOpen ? 'lg:grid-cols-[25%_75%]' : 'lg:grid-cols-[0%_100%]'"
  >
    <StarryBackground />

    <UnderConstruction v-if="showUnderConstruction" @close="showUnderConstruction = false" />

    <PrintButton />
    <ThemePicker class="fixed top-4 right-4 z-50 print:hidden" />
    <SidebarToggle />

    <AppSidebar :resume="resume">
      <ContactCard :items="resume.contact" />
      <SocialCard :items="resume.social" :owner="resume.firstName" />
      <InterestsCard :items="resume.passions" class="print:hidden" />
    </AppSidebar>

    <AppMain v-slot="{ scrolled }">
      <ResumeHeader
        class="mb-16 hidden lg:block"
        :condensed="scrolled"
        :first-name="resume.firstName"
        :last-name="resume.lastName"
        :role="resume.role"
      />

      <div class="space-y-16 lg:space-y-20 print:space-y-6">

        <ProfileSection :paragraphs="resume.profile" :stack="resume.stackCloud" :projects="resume.projects" />
        <ExperienceSection :items="resume.experience" />
        <EducationSection :items="resume.education" />
        <CoursesSection v-if="resume.courses?.length" :items="resume.courses" />
      </div>
    </AppMain>
  </div>
</template>
