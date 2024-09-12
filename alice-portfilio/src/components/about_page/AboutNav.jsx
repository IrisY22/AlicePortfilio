import { useEffect, useState } from "react"



function AboutNav({ setPart }) {
  // const [svg, setSvg] = useState()

  // useEffect(() => {
  //   if (part === 'introduction') {
  //     setSvg()
  //   }
  // }, [part])

  return (
    <div className="aboutNav">
      <nav className="navbar">
        <li className="introductionBtn" onClick={() => setPart('introduction')}>
          <svg width="271" height="110" viewBox="0 0 271 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M182.526 9.08487L178.493 8.37827C157.285 4.66217 135.738 3.2401 114.225 4.13665L91.7184 5.07461L64.6324 8.39358L46.3545 11.7644L30.6345 16.1377C25.9813 17.4322 24.0063 22.9389 26.776 26.8957L33.8871 37.0547C34.3007 37.6455 33.9719 38.4665 33.2649 38.6086L12.3169 42.8176C8.59498 43.5655 7.91076 48.5921 11.2974 50.3076L32.6345 61.1157C34.3362 61.9777 33.9799 64.5062 32.1062 64.8643L16.6614 67.8163C15.7124 67.9977 15.5469 69.286 16.4193 69.7014L38.6254 80.2747C39.428 80.6569 39.3703 81.818 38.5336 82.1187L20.2175 88.7002C17.3093 89.7452 17.6898 93.9734 20.7378 94.4825L40.6499 97.8081L159.932 105.898L260.166 101.248C262.013 101.162 262.764 98.8311 261.316 97.6825L256.428 93.8077L246.965 88.2394C245.508 87.3822 245.706 85.2165 247.293 84.6369L253.303 82.4432C255.209 81.7476 254.987 78.9842 252.995 78.6006L233.09 74.767C231.57 74.4744 231.686 72.2629 233.227 72.1299C240.607 71.493 241.598 61.0955 234.471 59.0764L231.487 58.2311C230.751 58.0226 230.8 56.9633 231.553 56.824L243.123 54.6812C248.211 53.7389 248.616 46.6039 243.668 45.0915L228.509 37.1232L225.308 32.3408C224.658 31.3702 225.069 30.0476 226.155 29.6169L236.024 25.7029C241.918 23.3654 240.976 14.7479 234.717 13.7382L182.526 9.08487Z" fill="white" fill-opacity="0.6" />
            <path d="M35.251 44.972H36.655V71H35.251V44.972ZM43.8474 71V52.388H45.1434V55.16C45.4674 54.572 45.9234 54.044 46.5114 53.576C47.1114 53.096 47.8254 52.718 48.6534 52.442C49.4814 52.166 50.3934 52.028 51.3894 52.028C52.6134 52.028 53.7174 52.274 54.7014 52.766C55.6974 53.258 56.4834 54.014 57.0594 55.034C57.6354 56.054 57.9234 57.356 57.9234 58.94V71H56.5194V58.94C56.5194 57.044 56.0574 55.646 55.1334 54.746C54.2214 53.846 52.9734 53.396 51.3894 53.396C50.2974 53.396 49.2834 53.564 48.3474 53.9C47.4114 54.236 46.6614 54.746 46.0974 55.43C45.5334 56.114 45.2514 56.984 45.2514 58.04V71H43.8474ZM70.6677 53.612H66.4017V66.824C66.4017 67.688 66.4737 68.318 66.6177 68.714C66.7737 69.098 67.0557 69.344 67.4637 69.452C67.8837 69.548 68.4837 69.596 69.2637 69.596H70.8477V70.82C70.6197 70.892 70.2957 70.94 69.8757 70.964C69.4677 70.988 69.0357 71 68.5797 71C67.6437 71 66.9117 70.862 66.3837 70.586C65.8677 70.298 65.5017 69.848 65.2857 69.236C65.0817 68.624 64.9797 67.82 64.9797 66.824V53.612H61.9557V52.388H64.9797L65.2677 47.168H66.4017V52.388H70.6677V53.612ZM76.3318 71V52.388H77.6278V55.16C77.9518 54.32 78.4018 53.678 78.9778 53.234C79.5658 52.778 80.1958 52.466 80.8678 52.298C81.5398 52.118 82.1698 52.028 82.7578 52.028C83.1298 52.028 83.5018 52.058 83.8738 52.118C84.2458 52.166 84.5458 52.256 84.7738 52.388V53.828C84.5218 53.708 84.1858 53.624 83.7658 53.576C83.3578 53.528 83.0218 53.504 82.7578 53.504C82.3138 53.504 81.8038 53.57 81.2278 53.702C80.6638 53.822 80.1118 54.05 79.5718 54.386C79.0438 54.71 78.6058 55.172 78.2578 55.772C77.9098 56.36 77.7358 57.116 77.7358 58.04V71H76.3318ZM95.6866 71.36C94.0786 71.36 92.6686 71.012 91.4566 70.316C90.2446 69.62 89.3026 68.564 88.6306 67.148C87.9586 65.72 87.6226 63.92 87.6226 61.748C87.6226 59.804 87.9106 58.106 88.4866 56.654C89.0746 55.19 89.9626 54.056 91.1506 53.252C92.3506 52.436 93.8626 52.028 95.6866 52.028C97.2826 52.028 98.6746 52.382 99.8626 53.09C101.051 53.786 101.975 54.854 102.635 56.294C103.307 57.722 103.643 59.54 103.643 61.748C103.643 63.668 103.355 65.348 102.779 66.788C102.203 68.228 101.327 69.35 100.151 70.154C98.9866 70.958 97.4986 71.36 95.6866 71.36ZM95.6866 70.028C96.9946 70.028 98.1346 69.728 99.1066 69.128C100.079 68.528 100.835 67.616 101.375 66.392C101.915 65.168 102.185 63.62 102.185 61.748C102.185 60.08 101.951 58.622 101.483 57.374C101.015 56.114 100.301 55.136 99.3406 54.44C98.3806 53.744 97.1626 53.396 95.6866 53.396C94.3666 53.396 93.2086 53.696 92.2126 54.296C91.2286 54.896 90.4606 55.814 89.9086 57.05C89.3686 58.286 89.0986 59.852 89.0986 61.748C89.0986 63.404 89.3326 64.856 89.8006 66.104C90.2806 67.34 91.0066 68.306 91.9786 69.002C92.9626 69.686 94.1986 70.028 95.6866 70.028ZM115.385 71.36C113.045 71.36 111.161 70.568 109.733 68.984C108.305 67.388 107.591 64.94 107.591 61.64C107.591 59.72 107.873 58.04 108.437 56.6C109.001 55.16 109.859 54.038 111.011 53.234C112.163 52.43 113.621 52.028 115.385 52.028C116.501 52.028 117.455 52.178 118.247 52.478C119.051 52.778 119.711 53.144 120.227 53.576C120.755 54.008 121.157 54.428 121.433 54.836C121.721 55.244 121.907 55.556 121.991 55.772V44.252H123.431V71H122.135L122.027 67.184C121.955 67.4 121.805 67.736 121.577 68.192C121.349 68.636 120.989 69.104 120.497 69.596C120.017 70.088 119.357 70.508 118.517 70.856C117.689 71.192 116.645 71.36 115.385 71.36ZM115.421 70.028C117.857 70.028 119.561 69.344 120.533 67.976C121.505 66.596 121.991 64.406 121.991 61.406C121.967 59.774 121.745 58.358 121.325 57.158C120.917 55.958 120.245 55.034 119.309 54.386C118.385 53.726 117.125 53.396 115.529 53.396C113.609 53.396 112.061 54.05 110.885 55.358C109.721 56.666 109.139 58.682 109.139 61.406C109.139 63.986 109.649 66.068 110.669 67.652C111.701 69.236 113.285 70.028 115.421 70.028ZM136.75 71.36C135.67 71.348 134.686 71.204 133.798 70.928C132.922 70.652 132.166 70.244 131.53 69.704C130.894 69.164 130.402 68.486 130.054 67.67C129.718 66.842 129.55 65.876 129.55 64.772V52.388H130.954V64.772C130.954 66.332 131.416 67.592 132.34 68.552C133.276 69.512 134.716 69.992 136.66 69.992C138.376 69.992 139.762 69.542 140.818 68.642C141.874 67.742 142.402 66.356 142.402 64.484V52.388H143.806V71H142.51L142.402 67.58C142.186 68.348 141.826 69.02 141.322 69.596C140.83 70.16 140.2 70.598 139.432 70.91C138.676 71.222 137.782 71.372 136.75 71.36ZM156.79 52.028C157.906 52.028 158.956 52.226 159.94 52.622C160.936 53.006 161.788 53.594 162.496 54.386C163.204 55.178 163.678 56.18 163.918 57.392H162.388C162.244 56.576 161.914 55.868 161.398 55.268C160.894 54.668 160.246 54.206 159.454 53.882C158.662 53.558 157.774 53.396 156.79 53.396C154.834 53.396 153.238 54.08 152.002 55.448C150.766 56.804 150.148 58.904 150.148 61.748C150.148 64.22 150.694 66.218 151.786 67.742C152.878 69.266 154.546 70.028 156.79 70.028C157.774 70.028 158.662 69.866 159.454 69.542C160.246 69.218 160.894 68.756 161.398 68.156C161.914 67.556 162.244 66.848 162.388 66.032H163.918C163.678 67.232 163.204 68.228 162.496 69.02C161.788 69.812 160.936 70.4 159.94 70.784C158.956 71.168 157.906 71.36 156.79 71.36C155.17 71.36 153.748 71.018 152.524 70.334C151.3 69.638 150.346 68.582 149.662 67.166C148.99 65.738 148.654 63.932 148.654 61.748C148.654 59.804 148.948 58.106 149.536 56.654C150.124 55.19 151.018 54.056 152.218 53.252C153.43 52.436 154.954 52.028 156.79 52.028ZM176.312 53.612H172.046V66.824C172.046 67.688 172.118 68.318 172.262 68.714C172.418 69.098 172.7 69.344 173.108 69.452C173.528 69.548 174.128 69.596 174.908 69.596H176.492V70.82C176.264 70.892 175.94 70.94 175.52 70.964C175.112 70.988 174.68 71 174.224 71C173.288 71 172.556 70.862 172.028 70.586C171.512 70.298 171.146 69.848 170.93 69.236C170.726 68.624 170.624 67.82 170.624 66.824V53.612H167.6V52.388H170.624L170.912 47.168H172.046V52.388H176.312V53.612ZM183.884 52.388V71H182.462V52.388H183.884ZM184.01 45.008V47.168H182.3V45.008H184.01ZM197.605 71.36C195.997 71.36 194.587 71.012 193.375 70.316C192.163 69.62 191.221 68.564 190.549 67.148C189.877 65.72 189.541 63.92 189.541 61.748C189.541 59.804 189.829 58.106 190.405 56.654C190.993 55.19 191.881 54.056 193.069 53.252C194.269 52.436 195.781 52.028 197.605 52.028C199.201 52.028 200.593 52.382 201.781 53.09C202.969 53.786 203.893 54.854 204.553 56.294C205.225 57.722 205.561 59.54 205.561 61.748C205.561 63.668 205.273 65.348 204.697 66.788C204.121 68.228 203.245 69.35 202.069 70.154C200.905 70.958 199.417 71.36 197.605 71.36ZM197.605 70.028C198.913 70.028 200.053 69.728 201.025 69.128C201.997 68.528 202.753 67.616 203.293 66.392C203.833 65.168 204.103 63.62 204.103 61.748C204.103 60.08 203.869 58.622 203.401 57.374C202.933 56.114 202.219 55.136 201.259 54.44C200.299 53.744 199.081 53.396 197.605 53.396C196.285 53.396 195.127 53.696 194.131 54.296C193.147 54.896 192.379 55.814 191.827 57.05C191.287 58.286 191.017 59.852 191.017 61.748C191.017 63.404 191.251 64.856 191.719 66.104C192.199 67.34 192.925 68.306 193.897 69.002C194.881 69.686 196.117 70.028 197.605 70.028ZM210.769 71V52.388H212.065V55.16C212.389 54.572 212.845 54.044 213.433 53.576C214.033 53.096 214.747 52.718 215.575 52.442C216.403 52.166 217.315 52.028 218.311 52.028C219.535 52.028 220.639 52.274 221.623 52.766C222.619 53.258 223.405 54.014 223.981 55.034C224.557 56.054 224.845 57.356 224.845 58.94V71H223.441V58.94C223.441 57.044 222.979 55.646 222.055 54.746C221.143 53.846 219.895 53.396 218.311 53.396C217.219 53.396 216.205 53.564 215.269 53.9C214.333 54.236 213.583 54.746 213.019 55.43C212.455 56.114 212.173 56.984 212.173 58.04V71H210.769Z" fill="black" />
          </svg>
        </li>

        <li className="experienceBtn" onClick={() => setPart('experience')}>
          <svg width="255" height="96" viewBox="0 0 255 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.8574 94.9777C24.2728 94.9944 34.5133 95.0142 35.9677 94.9689C43.7536 94.7277 51.5493 94.7483 59.3533 94.7392C84.4399 94.7099 109.504 94.883 134.581 94.8537C164.619 94.8186 194.514 93.9576 224.459 92.7316C231.828 92.4295 252.015 93.8706 254.604 86.4429C255.926 82.6481 244.509 83.7007 242.768 81.2117C242.145 80.3219 247.193 78.5101 248.12 77.9785C250.507 76.6072 251.067 74.1947 250.651 72.1255C250.007 68.9043 243.52 67.8627 241.35 65.2779C238.828 62.2731 245.028 60.8735 243.883 58.4165C242.538 55.5332 235.994 54.6057 235.144 50.9632C234.004 46.0805 244.638 42.6805 241.617 37.6423C238.414 32.2998 230.162 28.7165 223.015 26.1663C218.378 24.5127 212.216 23.2674 208.925 20.1315C205.521 16.8877 222.189 11.4606 216.244 7.21321C208.088 1.38567 191.29 2.17485 180.739 1.60604C150.487 -0.0246578 119.452 -0.422765 89.1688 1.10807C71.6082 1.99531 54.056 2.86171 36.7649 5.20343C30.6623 6.0297 20.4872 6.60385 16.7634 10.8754C13.5407 14.5722 14.8976 18.8082 19.3053 21.5629C21.0096 22.6279 23.905 23.3009 24.9419 24.7842C25.3674 25.3906 19.8922 28.5605 19.3094 29.2286C16.4826 32.4727 14.4698 37.2738 15.3708 41.1344C15.9747 43.72 27.2742 47.6825 25.2382 50.6034C21.4679 56.0086 8.6355 58.1497 7.77616 64.9457C7.34443 68.3626 19.2939 75.4947 18.0947 78.7965C16.8955 82.0992 1.81099 81.8808 0.578349 84.7591C-3.14448 93.4606 13.4546 94.7343 25.8574 94.9777Z" fill="white" fill-opacity="0.6" />
            <path d="M35.5148 62.7585V36.7305H50.4548V38.1705H36.9188V48.8625H49.5188V50.3385H36.9188V61.2465L50.9588 61.2825V62.7585H35.5148ZM70.6795 62.7585H68.9335L62.5435 54.2265L56.2255 62.7585H54.4435L61.6435 53.1105L54.9835 44.1465H56.7475L62.5435 51.9945L68.3755 44.1465H70.1395L63.4795 53.1105L70.6795 62.7585ZM75.5057 68.5545V44.1465H76.8737L76.9457 47.9625C77.0777 47.6265 77.2877 47.2245 77.5757 46.7565C77.8637 46.2885 78.2597 45.8265 78.7637 45.3705C79.2677 44.9145 79.8977 44.5365 80.6537 44.2365C81.4097 43.9365 82.3217 43.7865 83.3897 43.7865C84.9737 43.7865 86.3597 44.1225 87.5477 44.7945C88.7357 45.4665 89.6597 46.4925 90.3197 47.8725C90.9797 49.2525 91.3097 50.9985 91.3097 53.1105C91.3097 55.1145 91.0217 56.8665 90.4457 58.3665C89.8817 59.8665 89.0117 61.0365 87.8357 61.8765C86.6717 62.7045 85.1897 63.1185 83.3897 63.1185C82.3217 63.1185 81.4097 62.9685 80.6537 62.6685C79.8977 62.3565 79.2677 61.9665 78.7637 61.4985C78.2717 61.0305 77.8817 60.5565 77.5937 60.0765C77.3057 59.5965 77.0897 59.1765 76.9457 58.8165V68.5545H75.5057ZM83.3897 61.7865C85.3217 61.7865 86.8697 61.0905 88.0337 59.6985C89.2097 58.2945 89.7977 56.1465 89.7977 53.2545C89.7977 50.8185 89.2757 48.8625 88.2317 47.3865C87.1877 45.8985 85.5737 45.1545 83.3897 45.1545C81.2897 45.1545 79.6817 45.8865 78.5657 47.3505C77.4497 48.8145 76.8917 50.7825 76.8917 53.2545C76.8917 54.8985 77.1377 56.3625 77.6297 57.6465C78.1337 58.9305 78.8657 59.9445 79.8257 60.6885C80.7977 61.4205 81.9857 61.7865 83.3897 61.7865ZM96.9972 53.7945C96.9972 55.1985 97.2312 56.5065 97.6992 57.7185C98.1672 58.9185 98.8992 59.8905 99.8952 60.6345C100.891 61.3785 102.175 61.7505 103.747 61.7505C105.223 61.7505 106.483 61.3965 107.527 60.6885C108.571 59.9805 109.201 59.0145 109.417 57.7905H110.947C110.707 58.9905 110.227 59.9865 109.507 60.7785C108.787 61.5705 107.923 62.1585 106.915 62.5425C105.919 62.9265 104.863 63.1185 103.747 63.1185C102.115 63.1185 100.675 62.7525 99.4272 62.0205C98.1912 61.2765 97.2192 60.1965 96.5112 58.7805C95.8152 57.3645 95.4672 55.6425 95.4672 53.6145C95.4672 51.5625 95.7792 49.8045 96.4032 48.3405C97.0392 46.8645 97.9572 45.7365 99.1572 44.9565C100.369 44.1765 101.827 43.7865 103.531 43.7865C105.139 43.7865 106.507 44.1405 107.635 44.8485C108.775 45.5565 109.645 46.5825 110.245 47.9265C110.857 49.2585 111.163 50.8785 111.163 52.7865V53.7945H96.9972ZM97.0332 52.4265H109.669C109.669 51.0465 109.447 49.8105 109.003 48.7185C108.559 47.6145 107.881 46.7445 106.969 46.1085C106.057 45.4725 104.899 45.1545 103.495 45.1545C101.971 45.1545 100.729 45.5205 99.7692 46.2525C98.8212 46.9725 98.1252 47.8905 97.6812 49.0065C97.2372 50.1225 97.0212 51.2625 97.0332 52.4265ZM116.568 62.7585V44.1465H117.864V46.9185C118.188 46.0785 118.638 45.4365 119.214 44.9925C119.802 44.5365 120.432 44.2245 121.104 44.0565C121.776 43.8765 122.406 43.7865 122.994 43.7865C123.366 43.7865 123.738 43.8165 124.11 43.8765C124.482 43.9245 124.782 44.0145 125.01 44.1465V45.5865C124.758 45.4665 124.422 45.3825 124.002 45.3345C123.594 45.2865 123.258 45.2625 122.994 45.2625C122.55 45.2625 122.04 45.3285 121.464 45.4605C120.9 45.5805 120.348 45.8085 119.808 46.1445C119.28 46.4685 118.842 46.9305 118.494 47.5305C118.146 48.1185 117.972 48.8745 117.972 49.7985V62.7585H116.568ZM131.73 44.1465V62.7585H130.308V44.1465H131.73ZM131.856 36.7665V38.9265H130.146V36.7665H131.856ZM139.114 53.7945C139.114 55.1985 139.348 56.5065 139.816 57.7185C140.284 58.9185 141.016 59.8905 142.012 60.6345C143.008 61.3785 144.292 61.7505 145.864 61.7505C147.34 61.7505 148.6 61.3965 149.644 60.6885C150.688 59.9805 151.318 59.0145 151.534 57.7905H153.064C152.824 58.9905 152.344 59.9865 151.624 60.7785C150.904 61.5705 150.04 62.1585 149.032 62.5425C148.036 62.9265 146.98 63.1185 145.864 63.1185C144.232 63.1185 142.792 62.7525 141.544 62.0205C140.308 61.2765 139.336 60.1965 138.628 58.7805C137.932 57.3645 137.584 55.6425 137.584 53.6145C137.584 51.5625 137.896 49.8045 138.52 48.3405C139.156 46.8645 140.074 45.7365 141.274 44.9565C142.486 44.1765 143.944 43.7865 145.648 43.7865C147.256 43.7865 148.624 44.1405 149.752 44.8485C150.892 45.5565 151.762 46.5825 152.362 47.9265C152.974 49.2585 153.28 50.8785 153.28 52.7865V53.7945H139.114ZM139.15 52.4265H151.786C151.786 51.0465 151.564 49.8105 151.12 48.7185C150.676 47.6145 149.998 46.7445 149.086 46.1085C148.174 45.4725 147.016 45.1545 145.612 45.1545C144.088 45.1545 142.846 45.5205 141.886 46.2525C140.938 46.9725 140.242 47.8905 139.798 49.0065C139.354 50.1225 139.138 51.2625 139.15 52.4265ZM158.685 62.7585V44.1465H159.981V46.9185C160.305 46.3305 160.761 45.8025 161.349 45.3345C161.949 44.8545 162.663 44.4765 163.491 44.2005C164.319 43.9245 165.231 43.7865 166.227 43.7865C167.451 43.7865 168.555 44.0325 169.539 44.5245C170.535 45.0165 171.321 45.7725 171.897 46.7925C172.473 47.8125 172.761 49.1145 172.761 50.6985V62.7585H171.357V50.6985C171.357 48.8025 170.895 47.4045 169.971 46.5045C169.059 45.6045 167.811 45.1545 166.227 45.1545C165.135 45.1545 164.121 45.3225 163.185 45.6585C162.249 45.9945 161.499 46.5045 160.935 47.1885C160.371 47.8725 160.089 48.7425 160.089 49.7985V62.7585H158.685ZM185.741 43.7865C186.857 43.7865 187.907 43.9845 188.891 44.3805C189.887 44.7645 190.739 45.3525 191.447 46.1445C192.155 46.9365 192.629 47.9385 192.869 49.1505H191.339C191.195 48.3345 190.865 47.6265 190.349 47.0265C189.845 46.4265 189.197 45.9645 188.405 45.6405C187.613 45.3165 186.725 45.1545 185.741 45.1545C183.785 45.1545 182.189 45.8385 180.953 47.2065C179.717 48.5625 179.099 50.6625 179.099 53.5065C179.099 55.9785 179.645 57.9765 180.737 59.5005C181.829 61.0245 183.497 61.7865 185.741 61.7865C186.725 61.7865 187.613 61.6245 188.405 61.3005C189.197 60.9765 189.845 60.5145 190.349 59.9145C190.865 59.3145 191.195 58.6065 191.339 57.7905H192.869C192.629 58.9905 192.155 59.9865 191.447 60.7785C190.739 61.5705 189.887 62.1585 188.891 62.5425C187.907 62.9265 186.857 63.1185 185.741 63.1185C184.121 63.1185 182.699 62.7765 181.475 62.0925C180.251 61.3965 179.297 60.3405 178.613 58.9245C177.941 57.4965 177.605 55.6905 177.605 53.5065C177.605 51.5625 177.899 49.8645 178.487 48.4125C179.075 46.9485 179.969 45.8145 181.169 45.0105C182.381 44.1945 183.905 43.7865 185.741 43.7865ZM198.739 53.7945C198.739 55.1985 198.973 56.5065 199.441 57.7185C199.909 58.9185 200.641 59.8905 201.637 60.6345C202.633 61.3785 203.917 61.7505 205.489 61.7505C206.965 61.7505 208.225 61.3965 209.269 60.6885C210.313 59.9805 210.943 59.0145 211.159 57.7905H212.689C212.449 58.9905 211.969 59.9865 211.249 60.7785C210.529 61.5705 209.665 62.1585 208.657 62.5425C207.661 62.9265 206.605 63.1185 205.489 63.1185C203.857 63.1185 202.417 62.7525 201.169 62.0205C199.933 61.2765 198.961 60.1965 198.253 58.7805C197.557 57.3645 197.209 55.6425 197.209 53.6145C197.209 51.5625 197.521 49.8045 198.145 48.3405C198.781 46.8645 199.699 45.7365 200.899 44.9565C202.111 44.1765 203.569 43.7865 205.273 43.7865C206.881 43.7865 208.249 44.1405 209.377 44.8485C210.517 45.5565 211.387 46.5825 211.987 47.9265C212.599 49.2585 212.905 50.8785 212.905 52.7865V53.7945H198.739ZM198.775 52.4265H211.411C211.411 51.0465 211.189 49.8105 210.745 48.7185C210.301 47.6145 209.623 46.7445 208.711 46.1085C207.799 45.4725 206.641 45.1545 205.237 45.1545C203.713 45.1545 202.471 45.5205 201.511 46.2525C200.563 46.9725 199.867 47.8905 199.423 49.0065C198.979 50.1225 198.763 51.2625 198.775 52.4265Z" fill="black" />
          </svg>
        </li>

        <li className="educationBtn" onClick={() => setPart('education')}>
          <svg width="248" height="96" viewBox="0 0 248 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9525 94.9777C17.3679 94.9944 27.6084 95.0142 29.0628 94.9689C36.8487 94.7277 44.6444 94.7484 52.4484 94.7392C77.535 94.7099 102.6 94.883 127.676 94.8537C157.714 94.8186 187.609 93.9576 217.554 92.7317C224.923 92.4295 245.11 93.8707 247.699 86.4429C249.021 82.6481 237.604 83.7008 235.863 81.2117C235.24 80.3219 240.288 78.5101 241.215 77.9785C243.602 76.6072 244.162 74.1947 243.746 72.1255C243.102 68.9043 236.615 67.8627 234.446 65.2779C231.923 62.2731 238.124 60.8735 236.978 58.4165C235.633 55.5332 229.089 54.6057 228.239 50.9632C227.1 46.0805 239.999 41.0382 236.978 36C233.776 30.6576 223.258 28.7166 216.11 26.1664C211.473 24.5127 205.311 23.2674 202.02 20.1315C198.616 16.8877 228.04 11.4606 222.095 7.21322C213.939 1.38568 184.385 2.17486 173.834 1.60605C143.582 -0.0246509 112.547 -0.42275 82.2639 1.10808C64.7033 1.99531 47.151 2.86171 29.8599 5.20344C23.7574 6.0297 4.59507 2.94165 0.871262 7.21322C-2.35142 10.91 7.99273 18.8082 12.4004 21.5629C14.1047 22.6279 17.0001 23.3009 18.037 24.7842C18.4625 25.3906 12.9873 28.5605 12.4045 29.2286C9.5777 32.4727 7.56486 37.2738 8.46589 41.1344C9.06981 43.72 26.6311 48.0423 24.5951 50.9632C20.8248 56.3684 1.7306 58.1497 0.871263 64.9457C0.439527 68.3626 12.389 75.4947 11.1898 78.7965C9.9906 82.0992 2.1039 83.5644 0.871257 86.4427C-2.85158 95.1442 6.54965 94.7343 18.9525 94.9777Z" fill="white" fill-opacity="0.6" />
            <path d="M38.9283 66.7256V40.6976H53.8683V42.1376H40.3323V52.8296H52.9323V54.3056H40.3323V65.2136L54.3723 65.2496V66.7256H38.9283ZM66.2227 67.0856C63.8827 67.0856 61.9987 66.2936 60.5707 64.7096C59.1427 63.1136 58.4287 60.6656 58.4287 57.3656C58.4287 55.4456 58.7107 53.7656 59.2747 52.3256C59.8387 50.8856 60.6967 49.7636 61.8487 48.9596C63.0007 48.1556 64.4587 47.7536 66.2227 47.7536C67.3387 47.7536 68.2927 47.9036 69.0847 48.2036C69.8887 48.5036 70.5487 48.8696 71.0647 49.3016C71.5927 49.7336 71.9947 50.1536 72.2707 50.5616C72.5587 50.9696 72.7447 51.2816 72.8287 51.4976V39.9776H74.2687V66.7256H72.9727L72.8647 62.9096C72.7927 63.1256 72.6427 63.4616 72.4147 63.9176C72.1867 64.3616 71.8267 64.8296 71.3347 65.3216C70.8547 65.8136 70.1947 66.2336 69.3547 66.5816C68.5267 66.9176 67.4827 67.0856 66.2227 67.0856ZM66.2587 65.7536C68.6947 65.7536 70.3987 65.0696 71.3707 63.7016C72.3427 62.3216 72.8287 60.1316 72.8287 57.1316C72.8047 55.4996 72.5827 54.0836 72.1627 52.8836C71.7547 51.6836 71.0827 50.7596 70.1467 50.1116C69.2227 49.4516 67.9627 49.1216 66.3667 49.1216C64.4467 49.1216 62.8987 49.7756 61.7227 51.0836C60.5587 52.3916 59.9767 54.4076 59.9767 57.1316C59.9767 59.7116 60.4867 61.7936 61.5067 63.3776C62.5387 64.9616 64.1227 65.7536 66.2587 65.7536ZM87.5873 67.0856C86.5073 67.0736 85.5233 66.9296 84.6353 66.6536C83.7593 66.3776 83.0033 65.9696 82.3673 65.4296C81.7313 64.8896 81.2393 64.2116 80.8913 63.3956C80.5553 62.5676 80.3873 61.6016 80.3873 60.4976V48.1136H81.7913V60.4976C81.7913 62.0576 82.2533 63.3176 83.1773 64.2776C84.1133 65.2376 85.5533 65.7176 87.4973 65.7176C89.2133 65.7176 90.5993 65.2676 91.6553 64.3676C92.7113 63.4676 93.2393 62.0816 93.2393 60.2096V48.1136H94.6433V66.7256H93.3473L93.2393 63.3056C93.0233 64.0736 92.6633 64.7456 92.1593 65.3216C91.6673 65.8856 91.0373 66.3236 90.2693 66.6356C89.5133 66.9476 88.6193 67.0976 87.5873 67.0856ZM107.627 47.7536C108.743 47.7536 109.793 47.9516 110.777 48.3476C111.773 48.7316 112.625 49.3196 113.333 50.1116C114.041 50.9036 114.515 51.9056 114.755 53.1176H113.225C113.081 52.3016 112.751 51.5936 112.235 50.9936C111.731 50.3936 111.083 49.9316 110.291 49.6076C109.499 49.2836 108.611 49.1216 107.627 49.1216C105.671 49.1216 104.075 49.8056 102.839 51.1736C101.603 52.5296 100.985 54.6296 100.985 57.4736C100.985 59.9456 101.531 61.9436 102.623 63.4676C103.715 64.9916 105.383 65.7536 107.627 65.7536C108.611 65.7536 109.499 65.5916 110.291 65.2676C111.083 64.9436 111.731 64.4816 112.235 63.8816C112.751 63.2816 113.081 62.5736 113.225 61.7576H114.755C114.515 62.9576 114.041 63.9536 113.333 64.7456C112.625 65.5376 111.773 66.1256 110.777 66.5096C109.793 66.8936 108.743 67.0856 107.627 67.0856C106.007 67.0856 104.585 66.7436 103.361 66.0596C102.137 65.3636 101.183 64.3076 100.499 62.8916C99.8272 61.4636 99.4912 59.6576 99.4912 57.4736C99.4912 55.5296 99.7852 53.8316 100.373 52.3796C100.961 50.9156 101.855 49.7816 103.055 48.9776C104.267 48.1616 105.791 47.7536 107.627 47.7536ZM124.72 67.0856C123.496 67.0856 122.434 66.8816 121.534 66.4736C120.646 66.0536 119.956 65.4656 119.464 64.7096C118.984 63.9416 118.744 63.0296 118.744 61.9736C118.744 59.8856 119.416 58.3676 120.76 57.4196C122.116 56.4596 124.336 55.9256 127.42 55.8176L131.722 55.6736V53.8736C131.722 52.4456 131.284 51.2996 130.408 50.4356C129.544 49.5596 128.206 49.1216 126.394 49.1216C125.014 49.1216 123.856 49.4456 122.92 50.0936C121.984 50.7296 121.414 51.7256 121.21 53.0816H119.698C119.77 52.0136 120.058 51.0836 120.562 50.2916C121.078 49.4876 121.828 48.8636 122.812 48.4196C123.796 47.9756 125.014 47.7536 126.466 47.7536C127.798 47.7536 128.962 47.9756 129.958 48.4196C130.954 48.8516 131.728 49.5176 132.28 50.4176C132.832 51.3176 133.108 52.4576 133.108 53.8376V66.7256H131.812L131.758 62.9456C130.954 64.4936 129.922 65.5736 128.662 66.1856C127.402 66.7856 126.088 67.0856 124.72 67.0856ZM124.954 65.7536C125.734 65.7536 126.52 65.6156 127.312 65.3396C128.104 65.0516 128.83 64.6676 129.49 64.1876C130.162 63.6956 130.702 63.1496 131.11 62.5496C131.518 61.9496 131.722 61.3376 131.722 60.7136V57.0776L128.104 57.1496C126.124 57.1856 124.558 57.3716 123.406 57.7076C122.266 58.0436 121.45 58.5536 120.958 59.2376C120.466 59.9096 120.22 60.7856 120.22 61.8656C120.22 63.0896 120.652 64.0436 121.516 64.7276C122.38 65.4116 123.526 65.7536 124.954 65.7536ZM146.45 49.3376H142.184V62.5496C142.184 63.4136 142.256 64.0436 142.4 64.4396C142.556 64.8236 142.838 65.0696 143.246 65.1776C143.666 65.2736 144.266 65.3216 145.046 65.3216H146.63V66.5456C146.402 66.6176 146.078 66.6656 145.658 66.6896C145.25 66.7136 144.818 66.7256 144.362 66.7256C143.426 66.7256 142.694 66.5876 142.166 66.3116C141.65 66.0236 141.284 65.5736 141.068 64.9616C140.864 64.3496 140.762 63.5456 140.762 62.5496V49.3376H137.738V48.1136H140.762L141.05 42.8936H142.184V48.1136H146.45V49.3376ZM154.023 48.1136V66.7256H152.601V48.1136H154.023ZM154.149 40.7336V42.8936H152.439V40.7336H154.149ZM167.743 67.0856C166.135 67.0856 164.725 66.7376 163.513 66.0416C162.301 65.3456 161.359 64.2896 160.687 62.8736C160.015 61.4456 159.679 59.6456 159.679 57.4736C159.679 55.5296 159.967 53.8316 160.543 52.3796C161.131 50.9156 162.019 49.7816 163.207 48.9776C164.407 48.1616 165.919 47.7536 167.743 47.7536C169.339 47.7536 170.731 48.1076 171.919 48.8156C173.107 49.5116 174.031 50.5796 174.691 52.0196C175.363 53.4476 175.699 55.2656 175.699 57.4736C175.699 59.3936 175.411 61.0736 174.835 62.5136C174.259 63.9536 173.383 65.0756 172.207 65.8796C171.043 66.6836 169.555 67.0856 167.743 67.0856ZM167.743 65.7536C169.051 65.7536 170.191 65.4536 171.163 64.8536C172.135 64.2536 172.891 63.3416 173.431 62.1176C173.971 60.8936 174.241 59.3456 174.241 57.4736C174.241 55.8056 174.007 54.3476 173.539 53.0996C173.071 51.8396 172.357 50.8616 171.397 50.1656C170.437 49.4696 169.219 49.1216 167.743 49.1216C166.423 49.1216 165.265 49.4216 164.269 50.0216C163.285 50.6216 162.517 51.5396 161.965 52.7756C161.425 54.0116 161.155 55.5776 161.155 57.4736C161.155 59.1296 161.389 60.5816 161.857 61.8296C162.337 63.0656 163.063 64.0316 164.035 64.7276C165.019 65.4116 166.255 65.7536 167.743 65.7536ZM180.907 66.7256V48.1136H182.203V50.8856C182.527 50.2976 182.983 49.7696 183.571 49.3016C184.171 48.8216 184.885 48.4436 185.713 48.1676C186.541 47.8916 187.453 47.7536 188.449 47.7536C189.673 47.7536 190.777 47.9996 191.761 48.4916C192.757 48.9836 193.543 49.7396 194.119 50.7596C194.695 51.7796 194.983 53.0816 194.983 54.6656V66.7256H193.579V54.6656C193.579 52.7696 193.117 51.3716 192.193 50.4716C191.281 49.5716 190.033 49.1216 188.449 49.1216C187.357 49.1216 186.343 49.2896 185.407 49.6256C184.471 49.9616 183.721 50.4716 183.157 51.1556C182.593 51.8396 182.311 52.7096 182.311 53.7656V66.7256H180.907Z" fill="black" />
          </svg>
        </li>

        <li className="skillsBtn" onClick={() => setPart('skills')}>
          <svg width="249" height="102" viewBox="0 0 249 102" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M229.402 7.20485C230.987 7.19812 220.746 7.11373 219.292 7.14988C211.504 7.34189 203.304 1.04275 195.5 1.00262C170.414 0.873591 144.5 6.64269 120.679 6.64269C90.6424 6.4882 60.7421 7.1605 30.7899 8.19748C23.4192 8.45311 3.24198 6.88459 0.606096 14.2959C-0.740024 18.0822 10.6837 17.1017 12.4091 19.6017C13.0258 20.4954 7.96656 22.2753 7.03684 22.801C4.64095 24.1573 4.06601 26.5661 4.46822 28.6379C5.09231 31.8631 11.5729 32.9457 13.7257 35.5441C16.2292 38.5648 10.0199 39.9252 11.1498 42.3894C12.4768 45.2811 19.0148 46.2499 19.8414 49.8976C20.9504 54.7875 10.2957 58.1203 13.2848 63.1775C16.4536 68.54 24.6828 72.1753 31.8139 74.7706C36.4404 76.4535 42.5943 77.7376 45.8658 80.8942C49.249 84.1594 1.11917 87.078 7.03684 91.3629C15.1561 97.2418 63.3865 98.9618 73.9338 99.5972C104.176 101.419 135.207 102.013 165.499 100.673C183.065 99.8967 200.623 99.1411 217.928 96.9085C224.036 96.1208 234.214 95.6108 237.965 91.3629C241.211 87.6865 239.881 83.4421 235.491 80.6596C233.793 79.5838 230.902 78.8926 229.874 77.4027C229.453 76.7936 234.948 73.6584 235.535 72.994C238.382 69.7678 240.425 64.9795 239.548 61.1133C238.961 58.5239 227.687 54.4901 229.741 51.5821C233.545 46.2009 246.391 44.1408 247.293 37.3503C247.747 33.9363 235.842 26.7288 237.062 23.4347C238.282 20.1396 246.042 17.1664 247.293 14.296C251.071 5.61818 241.803 7.52647 229.402 7.20485Z" fill="white" fill-opacity="0.6" />
            <path d="M89.8777 65.0883C88.7137 65.0883 87.5977 64.9443 86.5297 64.6563C85.4737 64.3563 84.5197 63.9243 83.6677 63.3603C82.8157 62.7843 82.1017 62.0823 81.5257 61.2543C80.9617 60.4143 80.5837 59.4483 80.3917 58.3563H81.9757C82.2397 59.5323 82.7557 60.5163 83.5237 61.3083C84.3037 62.1003 85.2457 62.6943 86.3497 63.0903C87.4537 63.4863 88.6297 63.6843 89.8777 63.6843C91.3657 63.6843 92.6737 63.4623 93.8017 63.0183C94.9297 62.5623 95.8117 61.9383 96.4477 61.1463C97.0957 60.3543 97.4197 59.4483 97.4197 58.4283C97.4197 57.5043 97.2577 56.6823 96.9337 55.9623C96.6097 55.2423 96.1057 54.6303 95.4217 54.1263C94.7497 53.6223 93.8677 53.2323 92.7757 52.9563L87.0877 51.5163C85.2037 51.0363 83.7517 50.3163 82.7317 49.3563C81.7117 48.3843 81.2017 47.1243 81.2017 45.5763C81.2017 44.2083 81.5557 42.9843 82.2637 41.9043C82.9717 40.8123 83.9617 39.9543 85.2337 39.3303C86.5177 38.6943 88.0177 38.3763 89.7337 38.3763C91.6657 38.3763 93.2737 38.7363 94.5577 39.4563C95.8537 40.1643 96.8257 41.0703 97.4737 42.1743C98.1337 43.2783 98.4577 44.4123 98.4457 45.5763H96.8617C96.7297 44.1363 96.3037 43.0023 95.5837 42.1743C94.8757 41.3343 93.9997 40.7403 92.9557 40.3923C91.9237 40.0323 90.8317 39.8523 89.6797 39.8523C88.9117 39.8523 88.1197 39.9663 87.3037 40.1943C86.4877 40.4103 85.7317 40.7523 85.0357 41.2203C84.3397 41.6763 83.7757 42.2643 83.3437 42.9843C82.9117 43.6923 82.6957 44.5443 82.6957 45.5403C82.6957 46.6563 83.0857 47.5683 83.8657 48.2763C84.6457 48.9843 86.0317 49.6023 88.0237 50.1303L93.4777 51.5703C94.4857 51.8343 95.3377 52.2003 96.0337 52.6683C96.7297 53.1243 97.2877 53.6523 97.7077 54.2523C98.1397 54.8523 98.4517 55.5003 98.6437 56.1963C98.8357 56.8923 98.9317 57.6123 98.9317 58.3563C98.9317 59.5803 98.5957 60.7023 97.9237 61.7223C97.2517 62.7423 96.2437 63.5583 94.8997 64.1703C93.5677 64.7823 91.8937 65.0883 89.8777 65.0883ZM119.481 64.7283H117.681L111.057 54.0723L106.161 59.0403V64.7283H104.775V37.9803H106.161V57.0243L116.817 46.1163H118.797L112.137 52.8843L119.481 64.7283ZM126.371 46.1163V64.7283H124.949V46.1163H126.371ZM126.497 38.7363V40.8963H124.787V38.7363H126.497ZM137.095 64.8723C136.471 64.8723 135.937 64.7583 135.493 64.5303C135.061 64.3023 134.707 63.9843 134.431 63.5763C134.155 63.1683 133.951 62.6943 133.819 62.1543C133.699 61.6023 133.639 61.0083 133.639 60.3723V37.9803H135.043V60.3723C135.043 61.5723 135.259 62.4243 135.691 62.9283C136.135 63.4323 136.615 63.6843 137.131 63.6843H138.265V64.7283C138.061 64.7763 137.845 64.8123 137.617 64.8363C137.401 64.8603 137.227 64.8723 137.095 64.8723ZM146.305 64.8723C145.681 64.8723 145.147 64.7583 144.703 64.5303C144.271 64.3023 143.917 63.9843 143.641 63.5763C143.365 63.1683 143.161 62.6943 143.029 62.1543C142.909 61.6023 142.849 61.0083 142.849 60.3723V37.9803H144.253V60.3723C144.253 61.5723 144.469 62.4243 144.901 62.9283C145.345 63.4323 145.825 63.6843 146.341 63.6843H147.475V64.7283C147.271 64.7763 147.055 64.8123 146.827 64.8363C146.611 64.8603 146.437 64.8723 146.305 64.8723ZM157.753 65.0883C156.457 65.0883 155.293 64.8963 154.261 64.5123C153.241 64.1283 152.413 63.5403 151.777 62.7483C151.153 61.9563 150.769 60.9603 150.625 59.7603H152.119C152.287 60.5523 152.599 61.2483 153.055 61.8483C153.523 62.4363 154.147 62.8983 154.927 63.2343C155.719 63.5583 156.661 63.7203 157.753 63.7203C159.253 63.7203 160.459 63.4143 161.371 62.8023C162.295 62.1783 162.757 61.2243 162.757 59.9403C162.757 59.0763 162.535 58.3863 162.091 57.8703C161.647 57.3423 160.999 56.9583 160.147 56.7183L155.719 55.4943C154.363 55.1103 153.289 54.5703 152.497 53.8743C151.705 53.1783 151.309 52.2123 151.309 50.9763C151.309 49.9323 151.537 49.0203 151.993 48.2403C152.461 47.4603 153.163 46.8543 154.099 46.4223C155.047 45.9783 156.241 45.7563 157.681 45.7563C159.433 45.7563 160.861 46.1583 161.965 46.9623C163.081 47.7663 163.681 49.0083 163.765 50.6883H162.271C162.151 49.6203 161.707 48.7623 160.939 48.1143C160.183 47.4543 159.097 47.1243 157.681 47.1243C156.217 47.1243 155.035 47.4363 154.135 48.0603C153.235 48.6843 152.785 49.6563 152.785 50.9763C152.785 51.8163 153.073 52.4763 153.649 52.9563C154.237 53.4243 155.053 53.8023 156.097 54.0903L160.525 55.3143C161.209 55.5063 161.785 55.7583 162.253 56.0703C162.721 56.3823 163.099 56.7363 163.387 57.1323C163.687 57.5283 163.903 57.9603 164.035 58.4283C164.167 58.8963 164.233 59.3763 164.233 59.8683C164.233 60.9123 163.999 61.8243 163.531 62.6043C163.063 63.3843 162.349 63.9963 161.389 64.4403C160.441 64.8723 159.229 65.0883 157.753 65.0883Z" fill="black" />
          </svg>
        </li>
      </nav>

    </div>
  )

}

export default AboutNav