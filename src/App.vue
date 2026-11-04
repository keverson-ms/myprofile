<script setup>
import { ref } from 'vue'
import resume from './data/resume.js'
import { useSidebar } from './composables/useSidebar.js'
import UnderConstruction from './components/ui/UnderConstruction.vue'
import StarryBackground from './components/ui/StarryBackground.vue'

// Aviso "Em construção" (fechável). Mude para false para não exibir.
const showUnderConstruction = ref(true)

// Lateral aberta/fechada: controla as colunas do grid no desktop
const { open: sidebarOpen } = useSidebar()

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
  <!-- Celular/tablet: coluna única (lateral em cima, conteúdo embaixo).
       Desktop: grid de 2 colunas — lateral 25% | conteúdo 75%. Com a lateral fechada, 0% | 100%
       (a troca de colunas é animada). Altura da tela, sem rolagem da página: só o <main> rola. -->
  <div
    class="relative flex min-h-screen flex-col bg-paper font-sans text-fg lg:grid lg:h-screen lg:overflow-hidden lg:transition-[grid-template-columns] lg:duration-500 lg:ease-in-out print:h-auto print:overflow-visible"
    :class="sidebarOpen ? 'lg:grid-cols-[25%_75%]' : 'lg:grid-cols-[0%_100%]'"
  >
    <!-- Céu estrelado (modo escuro), atrás de todo o conteúdo -->
    <StarryBackground />

    <UnderConstruction v-if="showUnderConstruction" @close="showUnderConstruction = false" />

    <PrintButton />
    <ThemePicker class="fixed top-4 right-4 z-50 print:hidden" />
    <SidebarToggle />

    <AppSidebar :resume="resume">
      <ContactCard :items="resume.contact" />
      <SocialCard :items="resume.social" :owner="resume.firstName" />
      <SkillsCard :skills="resume.skills" />
      <InterestsCard :items="resume.passions" />
    </AppSidebar>

    <AppMain v-slot="{ scrolled }">
      <ResumeHeader
        class="mb-16 hidden lg:block"
        :condensed="scrolled"
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
