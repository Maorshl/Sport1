import React from 'react';
import {Path, Circle, Line, Mask, G, Rect} from 'react-native-svg';

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
};
