import React from 'react';
import {Path, Circle, Line, Mask, G, Rect, Polyline} from 'react-native-svg';

export default {
  activeHome: (
    <>
      <G fill="none" fill-rule="evenodd">
        <G fill="#02F784" fill-rule="nonzero">
          <Path
            d="M299.5 3L292 8.714 292 19 297.063 19 297.063 13.667 301.938 13.667 301.938 19 307 19 307 8.714z"
            transform="translate(-326 -778) translate(0 767) translate(34 8)"
          />
        </G>
      </G>
    </>
  ),
  inactiveHome: (
    <>
      <Path
        fill="#8B8B8B"
        d="M299.5 0L292 5.714 292 16 297.063 16 297.063 10.667 301.938 10.667 301.938 16 307 16 307 5.714z"
        transform="translate(-326 -1233) translate(0 1222) translate(34 11)"
      />
    </>
  ),
  inactiveResults: (
    <>
      <Path
        fill="#D8D8D8"
        stroke="#979797"
        d="M9.5 4.5H10.5V5.5H9.5zM9.5 9.5H10.5V10.5H9.5z"
        transform="translate(-250 -779) translate(0 767) translate(34 8) translate(216 4)"
      />
      <Path
        fill="#8B8B8B"
        fill-rule="nonzero"
        d="M2 0h7v15H2c-1.105 0-2-.895-2-2V2C0 .895.895 0 2 0z"
        transform="translate(-250 -779) translate(0 767) translate(34 8) translate(216 4)"
      />
      <Path
        fill="#8B8B8B"
        fill-rule="nonzero"
        d="M13 0h7v15h-7c-1.105 0-2-.895-2-2V2c0-1.105.895-2 2-2z"
        transform="translate(-250 -779) translate(0 767) translate(34 8) translate(216 4) rotate(180 15.5 7.5)"
      />
      <Path
        fill="#141414"
        fill-rule="nonzero"
        d="M15.899 4.069v2.72l.778.577c.163-.084.276-.253.276-.45V3.5c0-.12-.043-.232-.113-.316l-.941.886zM15.899 8.386v2.721l.778.577c.163-.085.276-.254.276-.45V7.816c0-.12-.043-.232-.113-.316l-.941.886zM3.146 3.977h2.682l.927-.872C6.67 3.042 6.564 3 6.443 3H2.51c-.113 0-.219.042-.304.105l.941.872zM5.899 4.069v2.72l.778.577c.163-.084.276-.253.276-.45V3.5c0-.12-.043-.232-.113-.316l-.941.886zM5.821 6.916L4.795 6.916 4.158 6.916 3.132 6.916 2.417 7.444 3.132 7.964 4.158 7.964 4.795 7.964 5.821 7.964 6.535 7.444zM3.146 10.931h2.682l.927.872c-.085.063-.191.106-.312.106H2.51c-.113 0-.219-.043-.304-.106l.941-.872zM2.113 11.719c-.07-.085-.113-.197-.113-.317V7.985c0-.197.113-.365.276-.45l.778.577v2.742l-.94.865z"
        transform="translate(-250 -779) translate(0 767) translate(34 8) translate(216 4)"
      />
    </>
  ),
  activeResults: (
    <>
      <G fill="none" fill-rule="evenodd">
        <Path
          fill="#D8D8D8"
          stroke="#979797"
          d="M9.5 4.5H10.5V5.5H9.5zM9.5 9.5H10.5V10.5H9.5z"
          transform="translate(-250 -779) translate(0 767) translate(34 8) translate(216 4)"
        />
        <Path
          fill="#02F784"
          fill-rule="nonzero"
          d="M2 0h7v15H2c-1.105 0-2-.895-2-2V2C0 .895.895 0 2 0z"
          transform="translate(-250 -779) translate(0 767) translate(34 8) translate(216 4)"
        />
        <Path
          fill="#02F784"
          fill-rule="nonzero"
          d="M13 0h7v15h-7c-1.105 0-2-.895-2-2V2c0-1.105.895-2 2-2z"
          transform="translate(-250 -779) translate(0 767) translate(34 8) translate(216 4) rotate(180 15.5 7.5)"
        />
        <Path
          fill="#141414"
          fill-rule="nonzero"
          d="M15.899 4.069v2.72l.778.577c.163-.084.276-.253.276-.45V3.5c0-.12-.043-.232-.113-.316l-.941.886zM15.899 8.386v2.721l.778.577c.163-.085.276-.254.276-.45V7.816c0-.12-.043-.232-.113-.316l-.941.886zM3.146 3.977h2.682l.927-.872C6.67 3.042 6.564 3 6.443 3H2.51c-.113 0-.219.042-.304.105l.941.872zM5.899 4.069v2.72l.778.577c.163-.084.276-.253.276-.45V3.5c0-.12-.043-.232-.113-.316l-.941.886zM5.821 6.916L4.795 6.916 4.158 6.916 3.132 6.916 2.417 7.444 3.132 7.964 4.158 7.964 4.795 7.964 5.821 7.964 6.535 7.444zM3.146 10.931h2.682l.927.872c-.085.063-.191.106-.312.106H2.51c-.113 0-.219-.043-.304-.106l.941-.872zM2.113 11.719c-.07-.085-.113-.197-.113-.317V7.985c0-.197.113-.365.276-.45l.778.577v2.742l-.94.865z"
          transform="translate(-250 -779) translate(0 767) translate(34 8) translate(216 4)"
        />
      </G>
    </>
  ),
  inactiveVOD: (
    <>
      <G fill="none" fill-rule="evenodd">
        <G fill="#8B8B8B" fill-rule="nonzero">
          <Path
            d="M142 6v11c0 1.105.895 2 2 2h19c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2h-19c-1.105 0-2 .895-2 2zm9 2l6 3.5-6 3.5V8z"
            transform="translate(-176 -779) translate(0 767) translate(34 8)"
          />
        </G>
      </G>
    </>
  ),
  activeVOD: (
    <>
      <G fill="none" fill-rule="evenodd">
        <G fill="#02F784" fill-rule="nonzero">
          <Path
            d="M142 6v11c0 1.105.895 2 2 2h19c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2h-19c-1.105 0-2 .895-2 2zm9 2l6 3.5-6 3.5V8z"
            transform="translate(-176 -779) translate(0 767) translate(34 8)"
          />
        </G>
      </G>
    </>
  ),
  inactiveBroadcasts: (
    <>
      <G fill="none" fill-rule="evenodd">
        <G fill="#8B8B8B" fill-rule="nonzero">
          <G transform="translate(-108 -778) translate(0 767) translate(34 8) translate(74 3)">
            <Path d="M13.53 2.434v1.36c0 .91-.739 1.648-1.65 1.648-.91 0-1.648-.738-1.648-1.649V2.434h-4.45v1.355c0 .913-.74 1.653-1.653 1.653s-1.653-.74-1.653-1.653V2.434h-.701C.787 2.434 0 3.214 0 4.144V15.29C0 16.242.81 17 1.775 17h12.45c.988 0 1.774-.78 1.774-1.71L16 4.144c0-.952-.81-1.71-1.776-1.71h-.694zm.694 12.856H1.775V6.914h12.45v8.376zM3.531 3.95V.66c0-.412.244-.66.569-.66.325 0 .569.226.569.66v3.29c0 .41-.244.637-.57.637-.324 0-.568-.227-.568-.638zm7.71 0V.66c0-.412.244-.66.57-.66.325 0 .568.226.568.66v3.29c0 .41-.243.637-.568.637-.326 0-.57-.227-.57-.638z" />
            <Rect width="10" height="6" x="3" y="8" rx=".5" />
          </G>
        </G>
      </G>
    </>
  ),
  activeBroadcasts: (
    <>
      <G fill="none" fill-rule="evenodd">
        <G fill="#02F784" fill-rule="nonzero">
          <G transform="translate(-108 -778) translate(0 767) translate(34 8) translate(74 3)">
            <Path d="M13.53 2.434v1.36c0 .91-.739 1.648-1.65 1.648-.91 0-1.648-.738-1.648-1.649V2.434h-4.45v1.355c0 .913-.74 1.653-1.653 1.653s-1.653-.74-1.653-1.653V2.434h-.701C.787 2.434 0 3.214 0 4.144V15.29C0 16.242.81 17 1.775 17h12.45c.988 0 1.774-.78 1.774-1.71L16 4.144c0-.952-.81-1.71-1.776-1.71h-.694zm.694 12.856H1.775V6.914h12.45v8.376zM3.531 3.95V.66c0-.412.244-.66.569-.66.325 0 .569.226.569.66v3.29c0 .41-.244.637-.57.637-.324 0-.568-.227-.568-.638zm7.71 0V.66c0-.412.244-.66.57-.66.325 0 .568.226.568.66v3.29c0 .41-.243.637-.568.637-.326 0-.57-.227-.57-.638z" />
            <Rect width="10" height="6" x="3" y="8" rx=".5" />
          </G>
        </G>
      </G>
    </>
  ),
  inactiveMore: (
    <>
      <G id="svg_1" fill-rule="evenodd" fill="none">
        <Rect
          id="svg_10"
          x="0"
          rx="1"
          fill="#8B8B8B"
          y="0"
          height="2"
          width="17"
        />
        <Rect
          id="svg_11"
          x="0"
          rx="1"
          fill="#8B8B8B"
          y="6"
          height="2"
          width="17"
        />
        <Rect
          id="svg_12"
          x="0"
          rx="1"
          fill="#8B8B8B"
          y="12"
          height="2"
          width="17"
        />
      </G>
    </>
  ),
  activeMore: (
    <>
      <G id="svg_1" fill-rule="evenodd" fill="none">
        <Rect
          id="svg_10"
          x="0"
          rx="1"
          fill="#02F784"
          y="0"
          height="2"
          width="17"
        />
        <Rect
          id="svg_11"
          x="0"
          rx="1"
          fill="#02F784"
          y="6"
          height="2"
          width="17"
        />
        <Rect
          id="svg_12"
          x="0"
          rx="1"
          fill="#02F784"
          y="12"
          height="2"
          width="17"
        />
      </G>
    </>
  ),
  downArrow: (
    <G
      id="-"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
      stroke-linecap="round"
      stroke-linejoin="round">
      <G
        id="more-page---fantasy"
        transform="translate(-28.000000, -205.000000)"
        stroke="#4E4E4E"
        stroke-width="1.5">
        <G id="Group-3" transform="translate(0.000000, 183.000000)">
          <Polyline id="Path-2" points="29 23 33 27 37 23"></Polyline>
        </G>
      </G>
    </G>
  ),
  madeByMoveo: (
    <G
      id="-"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
      opacity="0.452613467">
      <G
        id="more-page---fantasy"
        transform="translate(-97.000000, -1178.000000)"
        fill="#000000"
        fill-rule="nonzero">
        <G
          id="5acc99e25affdd530b32ef2d_created-by-moveo-70%"
          transform="translate(97.000000, 1178.000000)">
          <G>
            <Path
              d="M77.0100079,5.55169985 L81.5306777,1.03102997 L86.0513476,5.55169985 L81.5306777,10.0723697 L77.0100079,5.55169985 Z M72.251408,10.2309897 L76.7720779,5.71031984 L81.2927477,10.2309897 L76.7720779,14.7516596 L72.251408,10.2309897 Z M91.2064975,10.2309897 L95.7271673,5.71031984 L100.247837,10.2309897 L95.7271673,14.7516596 L91.2064975,10.2309897 Z M86.4478976,5.55169985 L90.9685675,1.03102997 L95.4892373,5.55169985 L90.9685675,10.0723697 L86.4478976,5.55169985 Z M81.6892977,10.2309897 L86.2099676,5.71031984 L90.7306375,10.2309897 L86.2099676,14.7516596 L81.6892977,10.2309897 Z M108.337457,5.55169985 C108.971937,4.52066987 110.082277,3.88618989 111.271927,3.88618989 C111.509857,3.88618989 111.747787,3.96549989 111.985717,4.04480989 C112.223647,4.28273988 112.461577,4.52066987 112.540887,4.91721986 C112.778817,5.78962984 112.858127,6.74134981 112.778817,7.69306979 L112.778817,14.8309696 C113.254677,14.8309696 113.730537,14.8309696 114.285707,14.8309696 L116.189147,14.8309696 C116.109837,13.4826996 116.030527,11.6585697 116.030527,9.43788974 L116.030527,5.86893984 C116.030527,5.78962984 116.030527,5.71031984 116.030527,5.63100984 C116.347767,5.07583986 116.665007,4.59997987 117.140867,4.20342988 C117.299487,4.04480989 117.537417,3.96549989 117.775347,3.88618989 C118.013277,3.80687989 118.251207,3.80687989 118.568447,3.80687989 C118.806377,3.80687989 119.123617,3.88618989 119.282237,3.96549989 C119.916717,4.36204988 120.233957,5.55169985 120.233957,7.61375979 L120.233957,14.6723496 C120.709817,14.6723496 121.106367,14.6723496 121.423607,14.6723496 L122.375327,14.6723496 C122.692567,14.6723496 123.247737,14.6723496 123.961527,14.7516596 L123.961527,14.6723496 C123.882217,14.5930396 123.882217,14.5137296 123.802907,14.4344196 C123.723597,14.2757996 123.644287,14.0378696 123.644287,13.8792496 C123.564977,13.5620096 123.564977,12.6895996 123.564977,11.1827097 L123.564977,6.10686983 C123.644287,4.75859987 123.247737,3.41032991 122.533947,2.22067994 C122.216707,1.74481995 121.740847,1.42757996 121.264987,1.11033997 C120.551197,0.872409976 119.837407,0.793099978 119.202927,0.793099978 C118.409827,0.793099978 117.616727,1.03102997 116.982247,1.34826996 C116.347767,1.74481995 115.792597,2.14136994 115.316737,2.69653993 C114.682257,1.42757996 113.413297,0.71378998 112.065027,0.793099978 C110.716757,0.793099978 109.368487,1.34826996 108.337457,2.22067994 L108.337457,1.03102997 L105.006437,1.03102997 L105.006437,14.7516596 L108.416767,14.7516596 C108.337457,14.1964896 108.337457,12.9275296 108.337457,10.9447797 L108.337457,5.55169985 L108.337457,5.55169985 Z M126.975306,12.8482196 C129.909776,15.6240696 134.509756,15.6240696 137.444226,12.8482196 C138.713186,11.4999497 139.347666,9.67581973 139.268356,7.77237978 C139.347666,5.94824983 138.713186,4.12411989 137.444226,2.77584992 C136.095956,1.42757996 134.271826,0.71378998 132.368386,0.793099978 C130.385636,0.71378998 128.482196,1.50688996 127.133926,2.93446992 C126.499446,3.5689499 126.023586,4.36204988 125.706347,5.23445985 C125.389107,6.10686983 125.230487,7.0585898 125.230487,8.01030978 C125.151177,9.75512973 125.785657,11.4999497 126.975306,12.8482196 L126.975306,12.8482196 L126.975306,12.8482196 Z M129.354606,4.99652986 C130.068396,4.12411989 131.099426,3.6482599 132.130456,3.7275699 C133.161486,3.6482599 134.192516,4.12411989 134.906306,4.91721986 C136.175266,6.66203981 136.175266,9.04133975 134.906306,10.7861597 C134.271826,11.5792597 133.320106,11.9758097 132.289076,11.9758097 C131.178736,12.0551197 130.147706,11.5792597 129.433916,10.7861597 C129.116676,10.3896097 128.799436,9.99305972 128.640816,9.43788974 C128.482196,8.96202975 128.323576,8.40685977 128.323576,7.85168978 C128.402886,6.82065981 128.720126,5.86893984 129.354606,4.99652986 L129.354606,4.99652986 L129.354606,4.99652986 Z M144.502816,14.7516596 L147.199356,14.7516596 L152.671746,1.03102997 L149.023486,1.03102997 L145.930396,10.0723697 L142.678686,1.03102997 L138.951116,1.03102997 L144.502816,14.7516596 Z M154.971736,13.0068396 C156.478626,14.3551096 158.461376,14.9895896 160.523436,14.9102796 C160.919986,14.9102796 161.395846,14.9102796 161.792396,14.8309696 C162.902735,14.7516596 164.013075,14.4344196 165.044105,13.8792496 L165.202725,11.8171897 C165.202725,11.4206397 165.282035,11.0240897 165.282035,10.7068497 C165.123415,10.8654697 164.885485,10.9447797 164.726865,11.1033997 C163.616525,11.6585697 162.347565,11.8964997 161.157916,11.8171897 C160.047576,11.8964997 158.857926,11.5792597 157.906206,11.0240897 C157.113106,10.5482297 156.557936,9.75512973 156.320006,8.80340976 L160.999296,8.80340976 C162.823425,8.88271975 164.568245,8.72409976 166.392375,8.40685977 C166.550995,7.93099978 166.550995,7.45513979 166.550995,6.97927981 C166.630305,5.31376985 165.995825,3.7275699 164.885485,2.53791993 C163.695835,1.26895996 162.109635,0.634479982 160.364816,0.71378998 C158.382066,0.634479982 156.399316,1.34826996 154.971736,2.77584992 C154.337256,3.41032991 153.782086,4.20342988 153.464846,5.07583986 C153.068296,5.94824983 152.909676,6.97927981 152.909676,7.93099978 C152.751056,9.91374972 153.544156,11.7378797 154.971736,13.0068396 L154.971736,13.0068396 L154.971736,13.0068396 Z M162.109635,6.42410982 L160.999296,6.42410982 C160.602746,6.42410982 160.126886,6.42410982 159.651026,6.42410982 L158.937236,6.42410982 C158.619996,6.42410982 158.302756,6.42410982 157.985516,6.42410982 L157.033796,6.42410982 C156.716556,6.42410982 156.478626,6.42410982 156.240696,6.42410982 C156.320006,6.02755983 156.478626,5.63100984 156.716556,5.23445985 C157.351036,4.12411989 158.540686,3.4896399 159.730336,3.4896399 C161.395846,3.4896399 162.426875,4.44135988 162.823425,6.34479982 C162.664805,6.34479982 162.426875,6.34479982 162.109635,6.42410982 L162.109635,6.42410982 L162.109635,6.42410982 Z M168.930295,12.8482196 C171.864765,15.6240696 176.464745,15.6240696 179.399215,12.8482196 C180.668175,11.4999497 181.302655,9.67581973 181.223345,7.77237978 C181.302655,5.94824983 180.668175,4.12411989 179.399215,2.77584992 C178.050945,1.42757996 176.226815,0.71378998 174.323375,0.793099978 C172.340625,0.71378998 170.437185,1.50688996 169.088915,2.93446992 C168.454435,3.5689499 167.978575,4.36204988 167.661335,5.23445985 C167.344095,6.10686983 167.185475,7.0585898 167.185475,8.01030978 C167.106165,9.75512973 167.740645,11.4999497 168.930295,12.8482196 L168.930295,12.8482196 L168.930295,12.8482196 Z M171.309595,4.99652986 C172.023385,4.12411989 173.054415,3.6482599 174.085445,3.7275699 C175.116475,3.6482599 176.147505,4.12411989 176.861295,4.91721986 C178.130255,6.66203981 178.130255,9.04133975 176.861295,10.7861597 C176.226815,11.5792597 175.275095,11.9758097 174.244065,11.9758097 C173.133725,12.0551197 172.102695,11.5792597 171.388905,10.7861597 C171.071665,10.3896097 170.754425,9.99305972 170.595805,9.43788974 C170.437185,8.96202975 170.278565,8.40685977 170.278565,7.85168978 C170.357875,6.82065981 170.675115,5.86893984 171.309595,4.99652986 L171.309595,4.99652986 L171.309595,4.99652986 Z"
              id="Powered_by"></Path>
            <G id="Group" transform="translate(0.000000, 2.379300)">
              <Path
                d="M2.77584992,9.12064975 C2.06205994,8.72409976 1.58619996,8.24823977 1.18964997,7.53444979 C0.793099978,6.89996981 0.555169985,6.18617983 0.555169985,5.31376985 C0.555169985,4.52066987 0.71378998,3.7275699 1.11033997,3.09308991 C1.50688996,2.45860993 2.06205994,1.90343995 2.69653993,1.50688996 C3.33101991,1.11033997 4.12411989,0.951719974 4.99652986,0.951719974 C5.63100984,0.951719974 6.26548983,1.03102997 6.82065981,1.26895996 C7.3758298,1.50688996 7.85168978,1.82412995 8.24823977,2.29998994 L7.45513979,3.09308991 C6.82065981,2.37929993 6.02755983,2.06205994 5.07583986,2.06205994 C4.52066987,2.06205994 3.96549989,2.22067994 3.41032991,2.45860993 C2.93446992,2.77584992 2.53791993,3.17239991 2.22067994,3.6482599 C1.98274994,4.20342988 1.82412995,4.75859987 1.82412995,5.31376985 C1.82412995,5.86893984 1.98274994,6.50341982 2.22067994,6.97927981 C2.53791993,7.45513979 2.93446992,7.85168978 3.41032991,8.16892977 C3.88618989,8.48616976 4.52066987,8.56547976 5.15514986,8.56547976 C6.10686983,8.56547976 6.89996981,8.24823977 7.53444979,7.53444979 L8.32754977,8.32754977 C7.93099978,8.80340976 7.45513979,9.12064975 6.89996981,9.35857974 C6.34479982,9.59650973 5.71031984,9.67581973 5.07583986,9.67581973 C4.28273988,9.75512973 3.4896399,9.51719974 2.77584992,9.12064975 Z"
                id="Path"></Path>
              <Path
                d="M11.9758097,3.41032991 C12.3723597,3.25170991 12.8482196,3.09308991 13.4033896,3.09308991 L13.4033896,4.20342988 C13.3240796,4.20342988 13.2447696,4.20342988 13.1654596,4.20342988 C12.5309797,4.20342988 12.0551197,4.36204988 11.6585697,4.75859987 C11.2620197,5.15514986 11.1033997,5.71031984 11.1033997,6.34479982 L11.1033997,9.59650973 L9.91374972,9.59650973 L9.91374972,3.17239991 L11.1033997,3.17239991 L11.1033997,4.28273988 C11.2620197,3.88618989 11.5792597,3.5689499 11.9758097,3.41032991 Z"
                id="Path"></Path>
              <Path
                d="M20.7792194,6.74134981 L15.5447596,6.74134981 C15.6240696,7.2965198 15.8619996,7.77237978 16.2585495,8.08961978 C16.6550995,8.40685977 17.2102695,8.64478976 17.8447495,8.64478976 C18.6378495,8.64478976 19.2723295,8.40685977 19.7481895,7.85168978 L20.3826694,8.64478976 C20.0654294,8.96202975 19.7481895,9.27926974 19.2723295,9.43788974 C18.8757795,9.59650973 18.3206095,9.67581973 17.8447495,9.67581973 C17.1309595,9.67581973 16.5757895,9.51719974 16.0206196,9.27926974 C15.4654496,8.96202975 15.0688996,8.64478976 14.8309696,8.08961978 C14.5930396,7.53444979 14.4344196,6.97927981 14.4344196,6.34479982 C14.4344196,5.71031984 14.5930396,5.15514986 14.8309696,4.67928987 C15.1482096,4.20342988 15.4654496,3.80687989 16.0206196,3.4896399 C16.5757895,3.17239991 17.0516495,3.09308991 17.6861295,3.09308991 C18.3206095,3.09308991 18.8757795,3.25170991 19.3516395,3.4896399 C19.8274994,3.80687989 20.2240494,4.20342988 20.4619794,4.67928987 C20.6999094,5.15514986 20.8585294,5.78962984 20.8585294,6.42410982 C20.7792194,6.50341982 20.7792194,6.66203981 20.7792194,6.74134981 Z M16.1792396,4.59997987 C15.7826896,4.91721986 15.5447596,5.39307985 15.5447596,5.94824983 L19.6688795,5.94824983 C19.5895695,5.39307985 19.3516395,4.99652986 19.0343995,4.59997987 C18.6378495,4.28273988 18.1619895,4.04480989 17.6068195,4.04480989 C17.0516495,4.04480989 16.5757895,4.28273988 16.1792396,4.59997987 Z"
                id="Shape"></Path>
              <Path
                d="M26.8860893,3.7275699 C27.3619492,4.20342988 27.5998792,4.83790987 27.5998792,5.71031984 L27.5998792,9.59650973 L26.4895393,9.59650973 L26.4895393,8.72409976 C26.3309193,9.04133975 26.0136793,9.27926974 25.6171293,9.43788974 C25.2205793,9.59650973 24.8240293,9.67581973 24.3481693,9.67581973 C23.6343793,9.67581973 23.0792094,9.51719974 22.6033494,9.12064975 C22.2067994,8.80340976 21.9688694,8.32754977 21.9688694,7.77237978 C21.9688694,7.2172098 22.2067994,6.74134981 22.6033494,6.42410982 C22.9998994,6.10686983 23.7136893,5.86893984 24.5860993,5.86893984 L26.4102293,5.86893984 L26.4102293,5.63100984 C26.4102293,5.15514986 26.2516093,4.75859987 25.9343693,4.44135988 C25.6171293,4.20342988 25.2205793,4.04480989 24.6654093,4.04480989 C24.2688593,4.04480989 23.8723093,4.12411989 23.5550693,4.20342988 C23.1585194,4.36204988 22.8412794,4.52066987 22.6033494,4.67928987 L22.1274894,3.80687989 C22.4447294,3.5689499 22.8412794,3.33101991 23.3171394,3.17239991 C23.7929993,3.01377992 24.2688593,2.93446992 24.8240293,2.93446992 C25.6964393,3.09308991 26.4102293,3.33101991 26.8860893,3.7275699 Z M25.6964393,8.48616976 C26.0136793,8.24823977 26.2516093,8.01030978 26.4102293,7.61375979 L26.4102293,6.74134981 L24.5860993,6.74134981 C23.5550693,6.74134981 23.0792094,7.0585898 23.0792094,7.77237978 C23.0792094,8.08961978 23.2378294,8.32754977 23.4757593,8.56547976 C23.7136893,8.72409976 24.1102393,8.88271975 24.5067893,8.88271975 C24.9826493,8.80340976 25.3791993,8.72409976 25.6964393,8.48616976 Z"
                id="Shape"></Path>
              <Path
                d="M33.3895091,9.27926974 C33.2308891,9.43788974 32.9929591,9.51719974 32.7550291,9.59650973 C32.5170991,9.67581973 32.2791691,9.67581973 31.9619291,9.67581973 C31.3274491,9.67581973 30.7722791,9.51719974 30.4550392,9.12064975 C30.0584892,8.80340976 29.8998692,8.24823977 29.8998692,7.61375979 L29.8998692,4.12411989 L28.7895292,4.12411989 L28.7895292,3.17239991 L29.8998692,3.17239991 L29.8998692,1.74481995 L31.0895191,1.74481995 L31.0895191,3.17239991 L32.9136491,3.17239991 L32.9136491,4.12411989 L31.0895191,4.12411989 L31.0895191,7.61375979 C31.0895191,7.93099978 31.1688291,8.24823977 31.3274491,8.40685977 C31.4860691,8.56547976 31.7239991,8.72409976 32.0412391,8.72409976 C32.4377891,8.72409976 32.6757191,8.64478976 32.9929591,8.40685977 L33.3895091,9.27926974 Z"
                id="Path"></Path>
              <Path
                d="M40.6067189,6.74134981 L35.372259,6.74134981 C35.451569,7.2965198 35.689499,7.77237978 36.086049,8.08961978 C36.482599,8.40685977 37.037769,8.64478976 37.672249,8.64478976 C38.4653489,8.64478976 39.0998289,8.40685977 39.5756889,7.85168978 L40.2101689,8.64478976 C39.8929289,8.96202975 39.5756889,9.27926974 39.0998289,9.43788974 C38.7032789,9.59650973 38.1481089,9.67581973 37.672249,9.67581973 C36.958459,9.67581973 36.403289,9.51719974 35.848119,9.27926974 C35.292949,8.96202975 34.896399,8.64478976 34.658469,8.08961978 C34.420539,7.53444979 34.261919,6.97927981 34.261919,6.34479982 C34.261919,5.71031984 34.420539,5.15514986 34.658469,4.67928987 C34.975709,4.20342988 35.292949,3.80687989 35.848119,3.4896399 C36.403289,3.17239991 36.879149,3.09308991 37.513629,3.09308991 C38.1481089,3.09308991 38.7032789,3.25170991 39.1791389,3.4896399 C39.6549989,3.80687989 40.0515489,4.20342988 40.2894789,4.67928987 C40.5274089,5.15514986 40.6860289,5.78962984 40.6860289,6.42410982 C40.6860289,6.50341982 40.6067189,6.66203981 40.6067189,6.74134981 Z M36.006739,4.59997987 C35.610189,4.91721986 35.372259,5.39307985 35.372259,5.94824983 L39.4963789,5.94824983 C39.4170689,5.39307985 39.1791389,4.99652986 38.8618989,4.59997987 C38.4653489,4.28273988 37.9894889,4.04480989 37.434319,4.04480989 C36.879149,4.04480989 36.403289,4.28273988 36.006739,4.59997987 Z"
                id="Shape"></Path>
              <Path
                d="M48.3790987,0.555169985 L48.3790987,9.59650973 L47.2687587,9.59650973 L47.2687587,8.56547976 C47.0308287,8.96202975 46.7135887,9.19995974 46.3170387,9.35857974 C45.9204887,9.51719974 45.4446287,9.67581973 44.9687688,9.67581973 C44.3342888,9.67581973 43.7791188,9.51719974 43.3032588,9.27926974 C42.8273988,9.04133975 42.4308488,8.64478976 42.1136088,8.08961978 C41.7963688,7.61375979 41.7170588,6.97927981 41.7170588,6.34479982 C41.7170588,5.71031984 41.8756788,5.15514986 42.1136088,4.59997987 C42.4308488,4.12411989 42.7480888,3.7275699 43.3032588,3.41032991 C43.7791188,3.17239991 44.3342888,3.01377992 44.9687688,3.01377992 C45.4446287,3.01377992 45.8411787,3.09308991 46.2377287,3.25170991 C46.6342787,3.41032991 46.9515187,3.6482599 47.1894487,4.04480989 L47.1894487,0.555169985 L48.3790987,0.555169985 Z M46.1584187,8.40685977 C46.4756587,8.24823977 46.7135887,7.93099978 46.9515187,7.61375979 C47.1101387,7.2965198 47.2687587,6.89996981 47.2687587,6.42410982 C47.2687587,5.94824983 47.1894487,5.55169985 46.9515187,5.23445985 C46.7928987,4.91721986 46.4756587,4.59997987 46.1584187,4.44135988 C45.8411787,4.28273988 45.4446287,4.12411989 45.0480787,4.12411989 C44.6515288,4.12411989 44.2549788,4.20342988 43.9377388,4.44135988 C43.6204988,4.59997987 43.3825688,4.91721986 43.1446388,5.23445985 C42.9860188,5.55169985 42.8273988,5.94824983 42.8273988,6.34479982 C42.8273988,6.82065981 42.9067088,7.2172098 43.1446388,7.53444979 C43.3032588,7.85168978 43.6204988,8.16892977 43.9377388,8.32754977 C44.2549788,8.48616976 44.6515288,8.64478976 45.0480787,8.64478976 C45.4446287,8.64478976 45.8411787,8.56547976 46.1584187,8.40685977 Z"
                id="Shape"></Path>
              <Path
                d="M59.0066384,3.4896399 C59.4824983,3.7275699 59.8790483,4.12411989 60.1962883,4.67928987 C60.5135283,5.23445985 60.5928383,5.78962984 60.5928383,6.42410982 C60.5928383,7.0585898 60.4342183,7.61375979 60.1962883,8.16892977 C59.8790483,8.64478976 59.5618083,9.04133975 59.0066384,9.35857974 C58.5307784,9.59650973 57.9756084,9.75512973 57.3411284,9.75512973 C56.8652684,9.75512973 56.3894084,9.67581973 55.9928584,9.43788974 C55.5963085,9.27926974 55.2790685,8.96202975 55.0411385,8.64478976 L55.0411385,9.67581973 L53.9307985,9.67581973 L53.9307985,0.555169985 L55.1204485,0.555169985 L55.1204485,4.12411989 C55.3583785,3.80687989 55.6756185,3.4896399 56.0721684,3.33101991 C56.4687184,3.17239991 56.8652684,3.09308991 57.3411284,3.09308991 C57.9756084,3.09308991 58.5307784,3.25170991 59.0066384,3.4896399 Z M58.3721584,8.40685977 C58.6893984,8.24823977 58.9273284,7.93099978 59.1652584,7.61375979 C59.3238784,7.2965198 59.4824983,6.89996981 59.4824983,6.42410982 C59.4824983,5.94824983 59.4031883,5.55169985 59.1652584,5.23445985 C59.0066384,4.91721986 58.6893984,4.59997987 58.3721584,4.44135988 C58.0549184,4.28273988 57.6583684,4.12411989 57.2618184,4.12411989 C56.8652684,4.12411989 56.4687184,4.20342988 56.1514784,4.44135988 C55.8342384,4.59997987 55.5169985,4.91721986 55.3583785,5.23445985 C55.1204485,5.55169985 55.0411385,5.94824983 55.0411385,6.34479982 C55.0411385,6.82065981 55.1204485,7.2172098 55.3583785,7.53444979 C55.5169985,7.85168978 55.8342384,8.16892977 56.1514784,8.32754977 C56.4687184,8.48616976 56.8652684,8.64478976 57.2618184,8.64478976 C57.6583684,8.64478976 58.0549184,8.56547976 58.3721584,8.40685977 Z"
                id="Shape"></Path>
              <Path
                d="M67.9686681,3.17239991 L64.7962682,10.3102997 C64.5583382,10.9447797 64.1617882,11.4206397 63.8445482,11.7378797 C63.5273082,12.0551197 63.0514482,12.1344297 62.4962783,12.1344297 C62.1790383,12.1344297 61.8617983,12.0551197 61.5445583,11.9758097 C61.2273183,11.8964997 60.9893883,11.7378797 60.8307683,11.4999497 L61.3066283,10.6275397 C61.6238683,10.9447797 62.0204183,11.1033997 62.4962783,11.1033997 C62.8135183,11.1033997 63.0514482,11.0240897 63.2100682,10.8654697 C63.3686882,10.7068497 63.6066182,10.4689197 63.7652382,10.0723697 L64.0031682,9.59650973 L61.0686983,3.17239991 L62.2583483,3.17239991 L64.5583382,8.32754977 L66.7790181,3.17239991 L67.9686681,3.17239991 Z"
                id="Path"></Path>
            </G>
          </G>
        </G>
      </G>
    </G>
  ),
};
