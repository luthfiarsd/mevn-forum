<template>
    <Dialog
      v-model:visible="visible"
      pt:root:class="!border-0 !bg-transparent"
      pt:mask:class="backdrop-blur-sm"
    >
      <template #container="{ closeCallback }">
        <div
          class="flex flex-col px-8 py-8 gap-6 rounded-2xl"
          style="
            background-image: radial-gradient(
              circle at right top,
              var(--p-blue-400),
              var(--p-blue-700)
            );
          "
        >
          <div class="inline-flex flex-col gap-2">
            <label for="username" class="text-primary-50 font-semibold"
              >Username</label
            >
            <InputText
              id="username"
              class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80"
            ></InputText>
          </div>
          <div class="inline-flex flex-col gap-2">
            <label for="password" class="text-primary-50 font-semibold"
              >Password</label
            >
            <InputText
              id="password"
              class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80"
              type="password"
            ></InputText>
          </div>
          <div class="flex items-center gap-4">
            <Button
              label="Cancel"
              @click="closeCallback"
              text
              class="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"
            ></Button>
            <Button
              label="Sign-In"
              @click="closeCallback"
              text
              class="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"
            ></Button>
          </div>
        </div>
      </template>
    </Dialog>
  </template>
  