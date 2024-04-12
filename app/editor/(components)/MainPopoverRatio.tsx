"use client"

import * as React from "react"
import { Check, ChevronsUpDown, UploadCloud } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import UploadComponent from "@/components/UploadComponent"

import ColorPicker from "@/components/Colorpicker"


const frameworks = [
  {
    value: "youtube:16:9",
    label: "Youtube",
    svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ff0000" ><g clipPath="url(#clip0_6907_1214)"><path fillRule="evenodd" clipRule="evenodd" d="M22.6915 5.28682C23.0642 5.6595 23.3327 6.1233 23.4704 6.63205C24.2631 9.82283 24.0799 14.8622 23.4858 18.1761C23.3481 18.6849 23.0795 19.1487 22.7069 19.5213C22.3342 19.894 21.8704 20.1626 21.3616 20.3002C19.4992 20.8082 12.0033 20.8082 12.0033 20.8082C12.0033 20.8082 4.50731 20.8082 2.64486 20.3002C2.13612 20.1626 1.67231 19.894 1.29964 19.5213C0.926961 19.1487 0.658419 18.6849 0.520754 18.1761C-0.276556 14.9992 -0.0579885 9.95674 0.505362 6.64744C0.643027 6.13869 0.911568 5.67489 1.28424 5.30221C1.65692 4.92954 2.12072 4.661 2.62947 4.52333C4.49191 4.01539 11.9879 4 11.9879 4C11.9879 4 19.4838 4 21.3463 4.50794C21.855 4.6456 22.3188 4.91415 22.6915 5.28682ZM15.8205 12.4043L9.60215 16.006V8.80253L15.8205 12.4043Z" fill="currentColor"></path></g><defs><clipPath id="clip0_6907_1214"><rect width="24" height="24" fill="none"></rect></clipPath></defs></svg>

  },
  {
    value: "youtube shorts:9:16",
    label: "Youtube shorts",
    svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ff0000" ><path fillRule="evenodd" clipRule="evenodd" d="M14.3669 1.48526C16.4419 0.403879 19.0111 1.19164 20.1032 3.24519C21.1953 5.29874 20.3986 7.83926 18.3236 8.92064L16.6174 9.81762C18.0873 9.87133 19.4891 10.6788 20.2232 12.0592C21.3153 14.1127 20.5204 16.6532 18.4436 17.7346L9.34492 22.5149C7.26989 23.5963 4.70071 22.8085 3.60859 20.755C2.51647 18.7014 3.31318 16.1609 5.38821 15.0795L7.09443 14.1825C5.62454 14.1288 4.22269 13.3214 3.48864 11.941C2.39652 9.88744 3.19323 7.34691 5.26826 6.26553L14.3669 1.48526ZM9.45592 8.61449L14.9631 12.0144L9.45592 15.3982V8.61449Z" fill="currentColor"></path></svg>
  },
  {
    value: "tik tok:9:15",
    label: "Tik Tok",
    svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000" ><path fillRule="evenodd" clipRule="evenodd" d="M5.58333 1C3.05203 1 1 3.05203 1 5.58333V18.4167C1 20.948 3.05203 23 5.58333 23H18.4167C20.948 23 23 20.948 23 18.4167V5.58333C23 3.05203 20.948 1 18.4167 1H5.58333ZM19.3333 7.71048V10.4306C17.9597 10.4773 16.6033 10.1121 15.4375 9.38184C15.4375 10.271 15.4472 11.1607 15.4568 12.05C15.4653 12.8245 15.4737 13.5987 15.4757 14.372C15.4757 15.3532 15.1856 16.3125 14.6421 17.1283C14.0986 17.9442 13.3261 18.5802 12.4223 18.9557C11.5185 19.3312 10.524 19.4294 9.56456 19.238C8.6051 19.0466 7.72377 18.574 7.03204 17.8802C6.3403 17.1863 5.86922 16.3023 5.67838 15.3399C5.48753 14.3775 5.58548 13.3799 5.95984 12.4733C6.33421 11.5667 6.96817 10.7919 7.78156 10.2467C8.59496 9.70155 9.55125 9.41057 10.5295 9.41057C10.8014 9.4111 11.0728 9.43352 11.3411 9.47762V12.1116C10.8809 11.9471 10.3815 11.9282 9.91027 12.0574C9.43902 12.1867 9.01866 12.4578 8.70592 12.8343C8.39318 13.2108 8.20313 13.6745 8.16143 14.1627C8.11972 14.651 8.22837 15.1403 8.4727 15.5647C8.71703 15.989 9.08529 16.328 9.52774 16.5357C9.9702 16.7435 10.4656 16.8101 10.9469 16.7265C11.4283 16.643 11.8726 16.4133 12.2197 16.0684C12.5668 15.7236 12.8001 15.2802 12.888 14.7982V3.75L15.4518 3.81226V4.00861C15.4672 5.00019 15.8268 5.95535 16.4688 6.70959C17.0942 7.37047 18.0634 7.71048 19.3333 7.71048Z" fill="currentColor"></path></svg>
  },
  {
    value: "instagram post:1:1",
    label: "Instagram post",
    svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#71737C" ><path d="M16.125 1H7.875C4.07862 1 1 4.07862 1 7.875V16.125C1 19.9214 4.07862 23 7.875 23H16.125C19.9214 23 23 19.9214 23 16.125V7.875C23 4.07862 19.9214 1 16.125 1ZM20.9375 16.125C20.9375 18.7788 18.7788 20.9375 16.125 20.9375H7.875C5.22125 20.9375 3.0625 18.7788 3.0625 16.125V7.875C3.0625 5.22125 5.22125 3.0625 7.875 3.0625H16.125C18.7788 3.0625 20.9375 5.22125 20.9375 7.875V16.125Z" fill="url(#paint0_linear_6907_1200)"></path><path d="M12 6.5C8.96263 6.5 6.5 8.96263 6.5 12C6.5 15.0374 8.96263 17.5 12 17.5C15.0374 17.5 17.5 15.0374 17.5 12C17.5 8.96263 15.0374 6.5 12 6.5ZM12 15.4375C10.1053 15.4375 8.5625 13.8948 8.5625 12C8.5625 10.1039 10.1053 8.5625 12 8.5625C13.8948 8.5625 15.4375 10.1039 15.4375 12C15.4375 13.8948 13.8948 15.4375 12 15.4375Z" fill="url(#paint1_linear_6907_1200)"></path><path d="M17.9125 6.82037C18.3172 6.82037 18.6454 6.49226 18.6454 6.0875C18.6454 5.68275 18.3172 5.35463 17.9125 5.35463C17.5077 5.35463 17.1796 5.68275 17.1796 6.0875C17.1796 6.49226 17.5077 6.82037 17.9125 6.82037Z" fill="url(#paint2_linear_6907_1200)"></path><defs><linearGradient id="paint0_linear_6907_1200" x1="3.01389" y1="20.9862" x2="20.9861" y2="3.01376" gradientUnits="userSpaceOnUse"><stop stopColor="#FFC107"></stop><stop offset="0.507" stopColor="#F44336"></stop><stop offset="0.99" stopColor="#9C27B0"></stop></linearGradient><linearGradient id="paint1_linear_6907_1200" x1="4.22204" y1="19.778" x2="19.778" y2="4.22204" gradientUnits="userSpaceOnUse"><stop stopColor="#FFC107"></stop><stop offset="0.507" stopColor="#F44336"></stop><stop offset="0.99" stopColor="#9C27B0"></stop></linearGradient><linearGradient id="paint2_linear_6907_1200" x1="4.22261" y1="19.7795" x2="19.7774" y2="4.22261" gradientUnits="userSpaceOnUse"><stop stopColor="#FFC107"></stop><stop offset="0.507" stopColor="#F44336"></stop><stop offset="0.99" stopColor="#9C27B0"></stop></linearGradient></defs></svg>
  },
  {
    value: "instagram story:9:16",
    label: "Instagram story",
    svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#71737C" ><path d="M11.081 11.0817H7.58828C7.29266 11.0817 7.05088 11.3242 7.05088 11.6207V12.5639C7.05088 12.8604 7.29266 13.1029 7.58828 13.1029H11.081V16.6064C11.081 16.903 11.3228 17.1455 11.6184 17.1455H12.5587C12.8543 17.1455 13.0961 16.903 13.0961 16.6064V13.1029H16.5888C16.8844 13.1029 17.1262 12.8604 17.1262 12.5639V11.6207C17.1262 11.3242 16.8844 11.0817 16.5888 11.0817H13.0961V7.57818C13.0961 7.28164 12.8543 7.03912 12.5587 7.03912H11.6184C11.3228 7.03912 11.081 7.28164 11.081 7.57818V11.0817Z" fill="black"></path><path d="M11.081 11.0817H7.58828C7.29266 11.0817 7.05088 11.3242 7.05088 11.6207V12.5639C7.05088 12.8604 7.29266 13.1029 7.58828 13.1029H11.081V16.6064C11.081 16.903 11.3228 17.1455 11.6184 17.1455H12.5587C12.8543 17.1455 13.0961 16.903 13.0961 16.6064V13.1029H16.5888C16.8844 13.1029 17.1262 12.8604 17.1262 12.5639V11.6207C17.1262 11.3242 16.8844 11.0817 16.5888 11.0817H13.0961V7.57818C13.0961 7.28164 12.8543 7.03912 12.5587 7.03912H11.6184C11.3228 7.03912 11.081 7.28164 11.081 7.57818V11.0817Z" fill="url(#paint0_linear_26828_53828)"></path><path d="M4.92848 17.7653C4.52537 18.1696 4.52537 18.7894 4.92848 19.1938C6.27188 20.5682 7.9913 21.5385 9.84506 21.9695C10.3825 22.1042 10.9467 21.7808 11.081 21.2419C11.2152 20.7029 10.8928 20.1369 10.3556 20.0022C10.3288 20.0022 10.302 20.0022 10.302 19.9753C8.79749 19.625 7.42731 18.8703 6.35254 17.7655C5.94943 17.3881 5.30478 17.3881 4.92848 17.7653Z" fill="black"></path><path d="M4.92848 17.7653C4.52537 18.1696 4.52537 18.7894 4.92848 19.1938C6.27188 20.5682 7.9913 21.5385 9.84506 21.9695C10.3825 22.1042 10.9467 21.7808 11.081 21.2419C11.2152 20.7029 10.8928 20.1369 10.3556 20.0022C10.3288 20.0022 10.302 20.0022 10.302 19.9753C8.79749 19.625 7.42731 18.8703 6.35254 17.7655C5.94943 17.3881 5.30478 17.3881 4.92848 17.7653Z" fill="url(#paint1_linear_26828_53828)"></path><path d="M13.875 19.9755C13.3376 20.0834 12.9884 20.6224 13.0959 21.1612C13.2034 21.7003 13.7407 22.0506 14.2779 21.9428H14.3316C19.759 20.7302 23.1442 15.2865 21.9081 9.86957C20.8603 5.26107 16.7765 2 12.0748 2C11.5106 2 11.0538 2.45814 11.0538 3.02408C11.0538 3.59003 11.5106 4.04817 12.0748 4.04817C16.5346 4.04817 20.1346 7.6595 20.1346 12.1328C20.1614 15.8789 17.5555 19.1402 13.875 19.9755Z" fill="black"></path><path d="M13.875 19.9755C13.3376 20.0834 12.9884 20.6224 13.0959 21.1612C13.2034 21.7003 13.7407 22.0506 14.2779 21.9428H14.3316C19.759 20.7302 23.1442 15.2865 21.9081 9.86957C20.8603 5.26107 16.7765 2 12.0748 2C11.5106 2 11.0538 2.45814 11.0538 3.02408C11.0538 3.59003 11.5106 4.04817 12.0748 4.04817C16.5346 4.04817 20.1346 7.6595 20.1346 12.1328C20.1614 15.8789 17.5555 19.1402 13.875 19.9755Z" fill="url(#paint2_linear_26828_53828)"></path><path d="M2 12.106C2 13.3457 2.21496 14.5854 2.6717 15.7442C2.85985 16.2562 3.45085 16.5258 3.98827 16.3102C4.49863 16.1215 4.76742 15.5286 4.55248 14.9896C4.20323 14.0464 4.01508 13.0761 4.01508 12.0789C4.01508 11.513 3.55835 11.0548 2.99414 11.0548C2.42993 11.055 2 11.54 2 12.106Z" fill="black"></path><path d="M2 12.106C2 13.3457 2.21496 14.5854 2.6717 15.7442C2.85985 16.2562 3.45085 16.5258 3.98827 16.3102C4.49863 16.1215 4.76742 15.5286 4.55248 14.9896C4.20323 14.0464 4.01508 13.0761 4.01508 12.0789C4.01508 11.513 3.55835 11.0548 2.99414 11.0548C2.42993 11.055 2 11.54 2 12.106Z" fill="url(#paint3_linear_26828_53828)"></path><path d="M4.7407 6.66232C4.25715 6.39291 3.63909 6.55451 3.37052 7.03955C3.26304 7.22827 3.15556 7.41678 3.0749 7.6055C2.83313 8.09053 3.02127 8.7105 3.50481 8.95304C3.98836 9.19557 4.60643 9.00683 4.84822 8.5218V8.4949C4.92888 8.3333 5.00932 8.19837 5.08999 8.03676C5.38539 7.57862 5.22424 6.95863 4.7407 6.66232Z" fill="black"></path><path d="M4.7407 6.66232C4.25715 6.39291 3.63909 6.55451 3.37052 7.03955C3.26304 7.22827 3.15556 7.41678 3.0749 7.6055C2.83313 8.09053 3.02127 8.7105 3.50481 8.95304C3.98836 9.19557 4.60643 9.00683 4.84822 8.5218V8.4949C4.92888 8.3333 5.00932 8.19837 5.08999 8.03676C5.38539 7.57862 5.22424 6.95863 4.7407 6.66232Z" fill="url(#paint4_linear_26828_53828)"></path><defs><linearGradient id="paint0_linear_26828_53828" x1="3.8457" y1="20.1693" x2="20.1835" y2="3.6984" gradientUnits="userSpaceOnUse"><stop stopColor="#FFC107"></stop><stop offset="0.507" stopColor="#F44336"></stop><stop offset="0.99" stopColor="#9C27B0"></stop></linearGradient><linearGradient id="paint1_linear_26828_53828" x1="3.8457" y1="20.1693" x2="20.1835" y2="3.6984" gradientUnits="userSpaceOnUse"><stop stopColor="#FFC107"></stop><stop offset="0.507" stopColor="#F44336"></stop><stop offset="0.99" stopColor="#9C27B0"></stop></linearGradient><linearGradient id="paint2_linear_26828_53828" x1="3.8457" y1="20.1693" x2="20.1835" y2="3.6984" gradientUnits="userSpaceOnUse"><stop stopColor="#FFC107"></stop><stop offset="0.507" stopColor="#F44336"></stop><stop offset="0.99" stopColor="#9C27B0"></stop></linearGradient><linearGradient id="paint3_linear_26828_53828" x1="3.8457" y1="20.1693" x2="20.1835" y2="3.6984" gradientUnits="userSpaceOnUse"><stop stopColor="#FFC107"></stop><stop offset="0.507" stopColor="#F44336"></stop><stop offset="0.99" stopColor="#9C27B0"></stop></linearGradient><linearGradient id="paint4_linear_26828_53828" x1="3.8457" y1="20.1693" x2="20.1835" y2="3.6984" gradientUnits="userSpaceOnUse"><stop stopColor="#FFC107"></stop><stop offset="0.507" stopColor="#F44336"></stop><stop offset="0.99" stopColor="#9C27B0"></stop></linearGradient></defs></svg>
  },
  {
    value: "instagram reel:9:16",
    label: "Instagram Reel",
    svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#71737C" ><path d="M7.32946 1H16.6705C18.4087 1 19.9902 1.70898 21.1375 2.84766C22.2867 3.98812 23 5.56185 23 7.29134V16.7105C23 18.4364 22.2867 20.0083 21.1411 21.1488L21.1375 21.1523C19.9884 22.2928 18.4069 23 16.6723 23H7.32946C5.58949 23 4.00622 22.291 2.85885 21.1523L2.81562 21.104C1.69527 19.9689 1 18.4149 1 16.7087V7.29134C1 5.56006 1.71148 3.98812 2.85885 2.84766C4.00622 1.70719 5.58769 1 7.32946 1ZM17.4829 6.55371L17.4955 6.57341H21.3861C21.2294 5.55648 20.7413 4.64339 20.0388 3.94336C19.1742 3.08398 17.9818 2.55046 16.6705 2.55046H15.0729L17.4829 6.55371ZM15.6835 6.57341L13.2608 2.55046H7.94727L10.3987 6.57341H15.6835ZM8.5849 6.57341L6.21451 2.68115C5.34812 2.88883 4.5718 3.33464 3.96119 3.94336C3.25872 4.6416 2.77239 5.55648 2.61389 6.57341H8.5849ZM21.4402 8.12386H2.55985V16.7105C2.55985 17.9941 3.0804 19.1632 3.92157 20.019L3.96119 20.0566C4.82577 20.916 6.01998 21.4513 7.32946 21.4513H16.6705C17.9818 21.4513 19.1742 20.9178 20.037 20.0602L20.0406 20.0566C20.9034 19.1991 21.4402 18.0138 21.4402 16.7105V8.12386ZM10.1772 10.8381L15.0098 13.9622C15.0873 14.0124 15.1575 14.0768 15.2134 14.1556C15.4331 14.4725 15.3521 14.9076 15.0332 15.126L10.2204 17.9494C10.0997 18.0479 9.94482 18.1069 9.7737 18.1069C9.38464 18.1069 9.06943 17.7936 9.06943 17.4069V11.411H9.07303C9.07303 11.2731 9.11446 11.1335 9.19912 11.0117C9.42247 10.6948 9.86016 10.6178 10.1772 10.8381Z" fill="#18191B"></path><path d="M7.32946 1H16.6705C18.4087 1 19.9902 1.70898 21.1375 2.84766C22.2867 3.98812 23 5.56185 23 7.29134V16.7105C23 18.4364 22.2867 20.0083 21.1411 21.1488L21.1375 21.1523C19.9884 22.2928 18.4069 23 16.6723 23H7.32946C5.58949 23 4.00622 22.291 2.85885 21.1523L2.81562 21.104C1.69527 19.9689 1 18.4149 1 16.7087V7.29134C1 5.56006 1.71148 3.98812 2.85885 2.84766C4.00622 1.70719 5.58769 1 7.32946 1ZM17.4829 6.55371L17.4955 6.57341H21.3861C21.2294 5.55648 20.7413 4.64339 20.0388 3.94336C19.1742 3.08398 17.9818 2.55046 16.6705 2.55046H15.0729L17.4829 6.55371ZM15.6835 6.57341L13.2608 2.55046H7.94727L10.3987 6.57341H15.6835ZM8.5849 6.57341L6.21451 2.68115C5.34812 2.88883 4.5718 3.33464 3.96119 3.94336C3.25872 4.6416 2.77239 5.55648 2.61389 6.57341H8.5849ZM21.4402 8.12386H2.55985V16.7105C2.55985 17.9941 3.0804 19.1632 3.92157 20.019L3.96119 20.0566C4.82577 20.916 6.01998 21.4513 7.32946 21.4513H16.6705C17.9818 21.4513 19.1742 20.9178 20.037 20.0602L20.0406 20.0566C20.9034 19.1991 21.4402 18.0138 21.4402 16.7105V8.12386ZM10.1772 10.8381L15.0098 13.9622C15.0873 14.0124 15.1575 14.0768 15.2134 14.1556C15.4331 14.4725 15.3521 14.9076 15.0332 15.126L10.2204 17.9494C10.0997 18.0479 9.94482 18.1069 9.7737 18.1069C9.38464 18.1069 9.06943 17.7936 9.06943 17.4069V11.411H9.07303C9.07303 11.2731 9.11446 11.1335 9.19912 11.0117C9.42247 10.6948 9.86016 10.6178 10.1772 10.8381Z" fill="url(#paint0_linear_26828_53827)"></path><defs><linearGradient id="paint0_linear_26828_53827" x1="3.01389" y1="20.9862" x2="20.9861" y2="3.01376" gradientUnits="userSpaceOnUse"><stop stopColor="#FFC107"></stop><stop offset="0.507" stopColor="#F44336"></stop><stop offset="0.99" stopColor="#9C27B0"></stop></linearGradient></defs></svg>
  },

    {
      value: "linkedin:1:1",
      label: "Linkedin",
      svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#2767bc" ><path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z" fill="currentColor"></path></svg>
    },

      {
        value: "X (Twitter):1:1",
        label: "x (twitter)",
        svg:<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color="#000" ><path d="M 14.285156 10.171875 L 23.222656 0 L 21.105469 0 L 13.34375 8.832031 L 7.148438 0 L 0 0 L 9.371094 13.355469 L 0 24.019531 L 2.117188 24.019531 L 10.308594 14.691406 L 16.851562 24.019531 L 24 24.019531 M 2.878906 1.5625 L 6.132812 1.5625 L 21.101562 22.535156 L 17.851562 22.535156" fill="currentColor"></path></svg>
      
      },
      {
        value: "facebook post:1.19:1",
        label: "Facebook Post",
        svg:<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18" color="#1879f2" ><path fillRule="evenodd" clipRule="evenodd" d="M24 12.0689C24 5.40984 18.6318 0 12 0C5.36816 0 0 5.40984 0 12.0689C0 18.0984 4.38857 23.0951 10.129 24V15.5607H7.08245V12.0689H10.129V9.41311C10.129 6.38361 11.9216 4.71148 14.6645 4.71148C15.9771 4.71148 17.3486 4.94754 17.3486 4.94754V7.91803H15.84C14.351 7.91803 13.8808 8.85246 13.8808 9.80656V12.0689H17.2114L16.6824 15.5607H13.8906V24C19.6114 23.0951 24 18.0984 24 12.0689Z" fill="currentColor"></path></svg>
      },
        {
          value: "facebook story:9:16",
          label: "Facebook Story",
          svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#1879f2" ><path d="M11.081 11.0817H7.58828C7.29266 11.0817 7.05088 11.3242 7.05088 11.6207V12.5639C7.05088 12.8604 7.29266 13.1029 7.58828 13.1029H11.081V16.6064C11.081 16.903 11.3228 17.1455 11.6184 17.1455H12.5587C12.8543 17.1455 13.0961 16.903 13.0961 16.6064V13.1029H16.5888C16.8844 13.1029 17.1262 12.8604 17.1262 12.5639V11.6207C17.1262 11.3242 16.8844 11.0817 16.5888 11.0817H13.0961V7.57818C13.0961 7.28164 12.8543 7.03912 12.5587 7.03912H11.6184C11.3228 7.03912 11.081 7.28164 11.081 7.57818V11.0817Z" fill="currentColor"></path><path d="M4.92848 17.7653C4.52537 18.1696 4.52537 18.7894 4.92848 19.1938C6.27188 20.5682 7.9913 21.5385 9.84506 21.9695C10.3825 22.1042 10.9467 21.7808 11.081 21.2419C11.2152 20.7029 10.8928 20.1369 10.3556 20.0022C10.3288 20.0022 10.302 20.0022 10.302 19.9753C8.79749 19.625 7.42731 18.8703 6.35254 17.7655C5.94943 17.3881 5.30478 17.3881 4.92848 17.7653Z" fill="currentColor"></path><path d="M13.875 19.9755C13.3376 20.0834 12.9884 20.6224 13.0959 21.1612C13.2034 21.7003 13.7407 22.0506 14.2779 21.9428H14.3316C19.759 20.7302 23.1442 15.2865 21.9081 9.86957C20.8603 5.26107 16.7765 2 12.0748 2C11.5106 2 11.0538 2.45814 11.0538 3.02408C11.0538 3.59003 11.5106 4.04817 12.0748 4.04817C16.5346 4.04817 20.1346 7.6595 20.1346 12.1328C20.1614 15.8789 17.5555 19.1402 13.875 19.9755Z" fill="currentColor"></path><path d="M2 12.106C2 13.3457 2.21496 14.5854 2.6717 15.7442C2.85985 16.2562 3.45085 16.5258 3.98827 16.3102C4.49863 16.1215 4.76742 15.5286 4.55248 14.9896C4.20323 14.0464 4.01508 13.0761 4.01508 12.0789C4.01508 11.513 3.55835 11.0548 2.99414 11.0548C2.42993 11.055 2 11.54 2 12.106Z" fill="currentColor"></path><path d="M4.7407 6.66232C4.25715 6.39291 3.63909 6.55451 3.37052 7.03955C3.26304 7.22827 3.15556 7.41678 3.0749 7.6055C2.83313 8.09053 3.02127 8.7105 3.50481 8.95304C3.98836 9.19557 4.60643 9.00683 4.84822 8.5218V8.4949C4.92888 8.3333 5.00932 8.19837 5.08999 8.03676C5.38539 7.57862 5.22424 6.95863 4.7407 6.66232Z" fill="currentColor"></path></svg>
        },
          {
            value: "facebook video:1:1",
            label: "Facebook video",
            svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#1879f2" ><path d="M7.49996 21.6428C7.14511 21.6428 6.85711 21.3548 6.85711 21C6.85711 20.6451 7.14511 20.3571 7.49996 20.3571H16.5C16.8548 20.3571 17.1428 20.6451 17.1428 21C17.1428 21.3548 16.8548 21.6428 16.5 21.6428H7.49996ZM14.712 11.0108L10.3328 13.6483C9.93511 13.8874 9.42854 13.602 9.42854 13.1374V7.86169C9.42854 7.39797 9.93511 7.11169 10.3328 7.35083L14.712 9.98912C15.096 10.2205 15.096 10.7785 14.712 11.0108ZM18.6428 2.35712H5.35711C3.58454 2.35712 2.14282 3.79883 2.14282 5.5714V15.4285C2.14282 17.2011 3.58454 18.6428 5.35711 18.6428H18.6428C20.4154 18.6428 21.8571 17.2011 21.8571 15.4285V5.5714C21.8571 3.79883 20.4154 2.35712 18.6428 2.35712Z" fill="currentColor"></path></svg>
          },
            {
              value: "snapchat:9:16",
              label: "Snapchat",
              svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fffc00" ><g clipPath="url(#clip0_6910_101502)"><path d="M1.02683 17.6647C1.12274 17.3423 1.5817 17.1149 1.5817 17.1149C1.62508 17.0917 1.6639 17.0709 1.69587 17.0546C2.4608 16.6788 3.13897 16.2265 3.70982 15.7138C4.16878 15.3009 4.56152 14.8463 4.87663 14.3638C5.26252 13.7746 5.44291 13.2828 5.52054 13.016C5.56393 12.8421 5.55708 12.7725 5.52054 12.682C5.49086 12.6054 5.40181 12.5335 5.36071 12.4987C5.10268 12.3132 4.68711 12.0394 4.43137 11.8724C4.20988 11.7263 4.02036 11.601 3.90847 11.5221C3.54998 11.267 3.30338 11.0072 3.15952 10.7265C2.97228 10.3646 2.94945 9.96563 3.09558 9.5736C3.29196 9.04471 3.77832 8.72923 4.39712 8.72923C4.53412 8.72923 4.67569 8.74547 4.81726 8.77562C5.17119 8.85449 5.50684 8.98207 5.7877 9.09342C5.80825 9.1027 5.83108 9.08646 5.8288 9.06326C5.79912 8.35576 5.76487 7.40468 5.8425 6.50232C5.91101 5.68579 6.07769 4.99684 6.34713 4.39604C6.61885 3.79291 6.97278 3.34753 7.24907 3.02509C7.51166 2.71889 7.97519 2.26655 8.6739 1.86061C9.65576 1.28996 10.7746 1 11.9985 1C13.2201 1 14.3367 1.28996 15.3208 1.86061C16.0607 2.28975 16.5333 2.77457 16.748 3.02509C17.0243 3.34753 17.3782 3.79291 17.6499 4.39604C17.9216 4.99684 18.086 5.68347 18.1545 6.50232C18.2322 7.40932 18.2002 8.28385 18.1682 9.06326C18.1682 9.08646 18.1888 9.1027 18.2116 9.09342C18.4925 8.98207 18.8281 8.85449 19.1821 8.77562C19.3213 8.74547 19.4629 8.72923 19.6022 8.72923C20.2187 8.72923 20.7051 9.04471 20.9037 9.5736C21.0499 9.96563 21.027 10.3646 20.8398 10.7265C20.6937 11.0072 20.4493 11.267 20.0908 11.5221C19.9812 11.601 19.7894 11.7263 19.5679 11.8724C19.3191 12.0371 18.9149 12.3039 18.6546 12.4871C18.6226 12.5103 18.513 12.5938 18.4788 12.682C18.4422 12.7748 18.4354 12.8444 18.4833 13.0299C18.5633 13.299 18.7436 13.7862 19.1227 14.3638C19.4378 14.8486 19.8305 15.3009 20.2895 15.7138C20.8603 16.2265 21.5385 16.6788 22.3034 17.0546C22.34 17.0732 22.3834 17.0941 22.429 17.1219C22.429 17.1219 22.8857 17.3585 22.9725 17.6647C23.1004 18.117 22.7601 18.5415 22.4153 18.7689C21.8491 19.14 21.1595 19.3395 20.7599 19.4485C20.648 19.4787 20.5475 19.5065 20.4562 19.5344C20.3991 19.5529 20.2552 19.6086 20.1936 19.6898C20.116 19.7919 20.1068 19.9171 20.0794 20.0586C20.036 20.2976 19.9379 20.5922 19.6479 20.7963C19.3282 21.019 18.924 21.0352 18.4103 21.0561C17.8737 21.077 17.2069 21.1025 16.442 21.36C16.0881 21.4783 15.7661 21.6801 15.3962 21.9121C14.6198 22.3969 13.654 23 12.0054 23C10.3545 23 9.38175 22.3946 8.60083 21.9074C8.23093 21.6778 7.91354 21.4783 7.56646 21.3623C6.80153 21.1048 6.13478 21.0793 5.59818 21.0584C5.08442 21.0375 4.68026 21.0236 4.36058 20.7986C4.05004 20.5806 3.96099 20.2558 3.91989 20.0122C3.89705 19.8916 3.88335 19.7826 3.81485 19.6944C3.75548 19.6179 3.62305 19.5645 3.5614 19.5437C3.46778 19.5135 3.36274 19.4857 3.24629 19.4532C2.84669 19.3442 2.34435 19.2166 1.73469 18.8663C0.999435 18.4418 0.9492 17.9222 1.02683 17.6647Z" fill="currentColor"></path><path d="M0.0861931 17.5584C0.252609 17.0966 0.571377 16.8514 0.932335 16.6467C1.00031 16.6062 1.06359 16.5729 1.11516 16.5491C1.22298 16.492 1.33314 16.4372 1.4433 16.3801C2.57071 15.7731 3.45201 15.0065 4.06142 14.0996C4.26769 13.7925 4.41067 13.5164 4.51145 13.2902C4.56302 13.1379 4.56067 13.0522 4.52317 12.9736C4.49504 12.9141 4.42004 12.8522 4.37785 12.8213C4.18331 12.6903 3.98408 12.5594 3.84813 12.4713C3.60671 12.3118 3.41451 12.1857 3.29263 12.1C2.82854 11.7715 2.50508 11.4215 2.30351 11.0311C2.01756 10.4813 1.9824 9.85281 2.20272 9.26245C2.50743 8.44356 3.27153 7.93414 4.19503 7.93414C4.38722 7.93414 4.58177 7.95556 4.77397 7.99841C4.82553 8.01032 4.87475 8.02222 4.92397 8.03412C4.9146 7.47709 4.92867 6.88197 4.97789 6.30113C5.15133 4.25392 5.85684 3.18032 6.59282 2.32573C6.89987 1.96866 7.43428 1.44733 8.23589 0.980758C9.35392 0.328506 10.6196 0 12.0002 0C13.376 0 14.6417 0.328506 15.7598 0.978377C16.5661 1.44495 17.1005 1.96866 17.4052 2.32335C18.1412 3.17794 18.8467 4.25154 19.0201 6.29875C19.0693 6.87959 19.0811 7.47471 19.074 8.03174C19.1232 8.01984 19.1748 8.00794 19.224 7.99603C19.4162 7.95318 19.6131 7.93176 19.803 7.93176C20.7265 7.93176 21.4906 8.44118 21.7953 9.26007C22.0156 9.85043 21.9804 10.4789 21.6945 11.0288C21.4929 11.4192 21.1671 11.7691 20.7054 12.0976C20.5811 12.1857 20.3913 12.3118 20.1499 12.469C20.0186 12.5547 19.8288 12.6808 19.6412 12.807C19.6131 12.826 19.5123 12.9022 19.4772 12.9736C19.4373 13.0546 19.4373 13.1426 19.4959 13.3045C19.5944 13.5259 19.7373 13.7973 19.9389 14.0972C20.5366 14.9851 21.3921 15.7374 22.482 16.3372C23.061 16.6491 23.661 16.8562 23.9141 17.556C24.1063 18.0845 23.9798 18.6868 23.4946 19.1938C23.3352 19.3676 23.1336 19.5223 22.8805 19.6651C22.2851 19.9984 21.7789 20.1627 21.3804 20.2745C21.3101 20.296 21.1484 20.3483 21.078 20.4126C20.8999 20.5697 20.9257 20.8078 20.689 21.1553C20.546 21.372 20.3819 21.5195 20.246 21.6148C19.7514 21.9623 19.1936 21.9837 18.6029 22.0075C18.0708 22.029 17.4661 22.0528 16.777 22.2837C16.4911 22.3789 16.1934 22.5646 15.8512 22.7788C15.0261 23.2954 13.894 24 12.0025 24C10.1087 24 8.97187 23.2906 8.13979 22.7741C7.79758 22.5622 7.50225 22.3765 7.22567 22.2837C6.53657 22.0528 5.93185 22.029 5.39979 22.0075C4.80913 21.9837 4.25362 21.9623 3.75672 21.6148C3.60202 21.5053 3.40514 21.3267 3.25044 21.0553C3.08168 20.7625 3.08402 20.5554 2.92464 20.415C2.85901 20.3579 2.71603 20.3079 2.63869 20.2841C2.23788 20.1722 1.72457 20.0079 1.1175 19.6675C0.847958 19.5176 0.639351 19.3533 0.472935 19.1652C0.470591 19.1629 0.468246 19.1605 0.465902 19.1581C0.0135326 18.6582 -0.101318 18.075 0.0861931 17.5584ZM1.76676 18.4749C2.79338 19.051 3.47545 18.9891 4.00517 19.3343C4.4552 19.6294 4.19034 20.265 4.51614 20.4936C4.91929 20.7768 6.10764 20.4745 7.64288 20.9887C8.90858 21.4148 9.71723 22.636 11.9978 22.636C14.2831 22.636 15.0683 21.4196 16.3528 20.9887C17.888 20.4745 19.0787 20.7768 19.4795 20.4936C19.8053 20.265 19.5405 19.6294 19.9905 19.3343C20.5202 18.9867 21.2023 19.0486 22.2289 18.4749C22.8828 18.1083 22.5125 17.8822 22.2945 17.775C18.5771 15.9492 17.9865 13.126 17.9583 12.9141C17.9255 12.6618 17.8904 12.4618 18.1646 12.2023C18.4295 11.9524 19.6084 11.2121 19.9342 10.9812C20.4757 10.5979 20.7124 10.2146 20.5366 9.74331C20.4147 9.41718 20.1147 9.29578 19.7983 9.29578C19.6998 9.29578 19.5991 9.30768 19.503 9.3291C18.9099 9.46003 18.3334 9.76235 18.0005 9.84329C17.9536 9.85519 17.9138 9.85995 17.8786 9.85995C17.7005 9.85995 17.6396 9.76949 17.6513 9.56239C17.6888 8.903 17.7825 7.61754 17.6794 6.41539C17.5388 4.76334 17.0137 3.94446 16.3903 3.21841C16.0903 2.87086 14.6839 1.36163 11.9955 1.36163C9.30001 1.36163 7.90071 2.87086 7.60069 3.21841C6.97722 3.94208 6.45219 4.76096 6.31156 6.41539C6.20843 7.61754 6.29749 8.903 6.33968 9.56239C6.35375 9.77901 6.28812 9.85995 6.11233 9.85995C6.07717 9.85995 6.03498 9.85519 5.99044 9.84329C5.65761 9.76235 5.08102 9.46003 4.48801 9.3291C4.39191 9.30768 4.29113 9.29578 4.19268 9.29578C3.87626 9.29578 3.57624 9.41956 3.45436 9.74331C3.27857 10.2146 3.51764 10.5979 4.05674 10.9812C4.38254 11.2121 5.56151 11.9524 5.82637 12.2023C6.10061 12.4594 6.06545 12.6594 6.03263 12.9141C6.00685 13.126 5.41385 15.9492 1.69644 17.775C1.48549 17.8822 1.11282 18.1083 1.76676 18.4749Z" fill="black"></path></g><defs><clipPath id="clip0_6910_101502"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
            }

]


// const group2=[
//   {
//     label:"9:16",
//     value:"Tall Portrait",
//     svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#71737C" class="sc-aXZVg gXLylL OptionItemstyled__SocialIcon-sc-1m2meir-1 jCJlmR"><path d="M6.75 5C6.75 3.20507 8.20507 1.75 10 1.75H13C14.7949 1.75 16.25 3.20507 16.25 5V19C16.25 20.7949 14.7949 22.25 13 22.25H10C8.20507 22.25 6.75 20.7949 6.75 19V5Z" stroke="currentColor"></path></svg>
//   },
//   {
//     label:"4:5",
//     value:"Portrait",
//     svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#71737C" class="sc-aXZVg gXLylL OptionItemstyled__SocialIcon-sc-1m2meir-1 jCJlmR"><path d="M4.75 5C4.75 3.20507 6.20507 1.75 8 1.75H16.5C18.2949 1.75 19.75 3.20507 19.75 5V19C19.75 20.7949 18.2949 22.25 16.5 22.25H8C6.20507 22.25 4.75 20.7949 4.75 19V5Z" stroke="currentColor"></path></svg>
//   },
//   {
//     label:"1:1",
//     value:"Square",
//     svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#71737C" class="sc-aXZVg gXLylL OptionItemstyled__SocialIcon-sc-1m2meir-1 jCJlmR"><path d="M1.75 6C1.75 3.65279 3.65279 1.75 6 1.75H18C20.3472 1.75 22.25 3.65279 22.25 6V18C22.25 20.3472 20.3472 22.25 18 22.25H6C3.65279 22.25 1.75 20.3472 1.75 18V6Z" stroke="currentColor"></path></svg>
//   },
//   {
//     label:"5:4",
//     value:"Landscape",
//     svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#71737C" class="sc-aXZVg gXLylL OptionItemstyled__SocialIcon-sc-1m2meir-1 jCJlmR"><path d="M19 4.75C20.7949 4.75 22.25 6.20507 22.25 8L22.25 16.5C22.25 18.2949 20.7949 19.75 19 19.75L5 19.75C3.20507 19.75 1.75 18.2949 1.75 16.5L1.75 8C1.75 6.20507 3.20507 4.75 5 4.75L19 4.75Z" stroke="currentColor"></path></svg>
//   },
//   {
//     label:"16:9",
//     value:"Wide Landscape",
//     svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#71737C" class="sc-aXZVg gXLylL OptionItemstyled__SocialIcon-sc-1m2meir-1 jCJlmR"><path d="M19 7.75C20.7949 7.75 22.25 9.20507 22.25 11L22.25 14C22.25 15.7949 20.7949 17.25 19 17.25L5 17.25C3.20507 17.25 1.75 15.7949 1.75 14L1.75 11C1.75 9.20507 3.20507 7.75 5 7.75L19 7.75Z" stroke="currentColor"></path></svg>
//   },
  
// ]

export default function MainPopoverRatio({className}:{className?:string}) {
  
  const [color, setcolor] = React.useState("#580e0e")


  const [open, setOpen] = React.useState(false)

  

  return (
    <div className={cn("flex justify-center items-center",className)}>
    <div className=" rounded-xl bg-white shadow-sm border w-fit">
      <RatioCompoent/>
      
      <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-center items-center gap-3"
        >
        <span className={` rounded-full p-2  bg-[${color}] `} style={{backgroundColor:color}}></span> Background
        {/* bg-[${color}] */}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
      <Tabs defaultValue="account"  className=" w-full">
  <TabsList className=" w-full">
    <TabsTrigger className=" w-full" value="account">Color</TabsTrigger>
    <TabsTrigger className=" w-full" value="password">Image</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    
    <ColorPicker onvalueChange={(e:string)=>setcolor(e)}/>
    
  </TabsContent>
  <TabsContent value="password">
  <UploadComponent />
  </TabsContent>
</Tabs>

      </PopoverContent>
      </Popover>
      


    </div>
    </div>
  )
}


export const RatioCompoent=({className}:{className?:string})=>{
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const slectedLabel=frameworks?.find((k) => k.value.toLocaleLowerCase() === value)
  return (
    <Popover open={open} onOpenChange={setOpen}  >
    <PopoverTrigger asChild>
      <Button
        variant="ghost"
        role="combobox"
        aria-expanded={open}
        className={cn("w-[200px] justify-between border-r",className)}
      >
        {value
          ? ( <span className=" flex items-center gap-3">{slectedLabel?.svg}{slectedLabel?.label}</span>)
          : "Select Aspect ratio..."}
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent className={cn("w-[200px] p-0",className)}>
      <Command>
        <CommandInput placeholder="Search framework..." />
        <ScrollArea className="h-72  rounded-md border">
        <CommandEmpty>No framework found.</CommandEmpty>
        <CommandGroup>
        
          {frameworks.map((framework,i) => (
            <CommandItem
              key={i}
              value={framework.value}
              onSelect={(currentValue) => {
                
                
                setValue(currentValue === value ? "" : currentValue)
                setOpen(false)
              }}
              className="flex items-center gap-2 justify-between py-3"
            >
              <span className=" flex gap-2">
              <span>{framework.svg}</span><span>{framework.label}</span>
              </span>
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  value === framework.value.toLocaleLowerCase() ? "opacity-100" : "opacity-0"
                )}
              />
            </CommandItem>
          ))}
        </CommandGroup>
        </ScrollArea>
      </Command>
    </PopoverContent>
  </Popover>
  )
}
