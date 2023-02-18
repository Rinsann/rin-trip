import { onMounted, onUnmounted, onActivated, onDeactivated, ref } from "vue";
import { throttle } from "underscore";

export default function useScroll() {
  const isReachBottom = ref(false);
  const clientHeight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  const scrollListenerHandler = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight;
    scrollTop.value = document.documentElement.scrollTop;
    scrollHeight.value = document.documentElement.scrollHeight;
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("到底了");
      isReachBottom.value = true;
    }
  }, 100);

  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler);
  });

  onActivated(() => {
    window.addEventListener("scroll", scrollListenerHandler);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler);
  });

  onDeactivated(() => {
    window.removeEventListener("scroll", scrollListenerHandler);
  });

  return { isReachBottom, clientHeight, scrollTop, scrollHeight };
}
