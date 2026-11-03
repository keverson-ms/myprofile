<script setup>
import resume from './data/resume.js'

import PrintButton from './components/ui/PrintButton.vue'
import ThemePicker from './components/ui/ThemePicker.vue'

import SidebarToggle from './components/layout/SidebarToggle.vue'
import AppSidebar from './components/layout/AppSidebar.vue'
import AppMain from './components/layout/AppMain.vue'
import ResumeHeader from './components/layout/ResumeHeader.vue'

import ContactCard from './components/sidebar/ContactCard.vue'
import SocialCard from './components/sidebar/SocialCard.vue'
import SkillsCard from './components/sidebar/SkillsCard.vue'
import InterestsCard from './components/sidebar/InterestsCard.vue'

import ProfileSection from './components/sections/ProfileSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
</script>

<template>
  <!-- Desktop: altura da tela, sem rolagem da página — só o <main> rola -->
  <div
    class="relative flex min-h-screen flex-col bg-paper font-sans text-fg lg:h-screen lg:flex-row lg:overflow-hidden print:h-auto print:overflow-visible"
  >
    <PrintButton />
    <ThemePicker class="fixed top-4 right-4 z-50 print:hidden" />
    <SidebarToggle />

    <AppSidebar :resume="resume">
      <ContactCard :items="resume.contact" />
      <SocialCard :items="resume.social" :owner="resume.firstName" />
      <SkillsCard :skills="resume.skills" />
      <InterestsCard :items="resume.passions" />
    </AppSidebar>

    <AppMain>
      <ResumeHeader
        class="mb-16 hidden lg:block"
        :first-name="resume.firstName"
        :last-name="resume.lastName"
        :role="resume.role"
      />

      <div class="space-y-16 lg:space-y-20">
        <ProfileSection :paragraphs="resume.profile" />
        <ExperienceSection :items="resume.experience" />
        <EducationSection :items="resume.education" />
      </div>
    </AppMain>
  </div>
</template>
