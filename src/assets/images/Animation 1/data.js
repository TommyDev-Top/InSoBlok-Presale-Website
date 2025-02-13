import img_0 from "./images/img_0.png";
import img_1 from "./images/img_1.png";
import img_2 from "./images/img_2.png";
import img_3 from "./images/img_3.png";
import img_4 from "./images/img_4.png";
import img_5 from "./images/img_5.png";
import img_6 from "./images/img_6.png";
import img_7 from "./images/img_7.png";
import img_8 from "./images/img_8.png";
import img_9 from "./images/img_9.png";
import img_10 from "./images/img_10.png";
import img_11 from "./images/img_11.png";
import img_12 from "./images/img_12.png";

const animation1 = {
  v: "5.9.0",
  fr: 29.9700012207031,
  ip: 0,
  op: 180.00000733155,
  w: 1861,
  h: 1704,
  nm: "All files",
  ddd: 0,
  assets: [
    { id: "image_0", w: 243, h: 311, u: "", p: img_0, e: 0 },
    { id: "image_1", w: 459, h: 458, u: "", p: img_1, e: 0 },
    { id: "image_2", w: 475, h: 284, u: "", p: img_2, e: 0 },
    { id: "image_3", w: 681, h: 546, u: "", p: img_3, e: 0 },
    { id: "image_4", w: 681, h: 540, u: "", p: img_4, e: 0 },
    { id: "image_5", w: 681, h: 497, u: "", p: img_5, e: 0 },
    { id: "image_6", w: 510, h: 298, u: "", p: img_6, e: 0 },
    { id: "image_7", w: 120, h: 70, u: "", p: img_7, e: 0 },
    { id: "image_8", w: 1, h: 1, u: "", p: img_8, e: 0 },
    { id: "image_9", w: 213, h: 123, u: "", p: img_9, e: 0 },
    { id: "image_10", w: 432, h: 251, u: "", p: img_10, e: 0 },
    { id: "image_11", w: 1794, h: 1062, u: "", p: img_11, e: 0 },
    { id: "image_12", w: 1, h: 1, u: "", p: img_12, e: 0 },
  ],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 2,
      nm: "Layer 2",
      refId: "image_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [924.064, 326.435, 0], ix: 2, l: 2 },
        a: { a: 0, k: [121.295, 155.234, 0], ix: 1, l: 2 },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              t: 144,
              s: [0, 0, 100],
            },
            { t: 149.000006068894, s: [100, 100, 100] },
          ],
          ix: 6,
          l: 2,
          x: "var $bm_rt;\nvar amp, freq, decay, n, time_max, n, t, t, v;\namp = 0.1;\nfreq = 2;\ndecay = 5;\nn = 0;\n$bm_rt = time_max = 4;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < time_max) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}",
        },
      },
      ao: 0,
      ip: 0,
      op: 180.00000733155,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 2,
      nm: "Layer 3",
      refId: "image_1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [923.904, 327.343, 0], ix: 2, l: 2 },
        a: { a: 0, k: [229.023, 228.937, 0], ix: 1, l: 2 },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              t: 133,
              s: [0, 0, 100],
            },
            { t: 138.000005620855, s: [100, 100, 100] },
          ],
          ix: 6,
          l: 2,
          x: "var $bm_rt;\nvar amp, freq, decay, n, time_max, n, t, t, v;\namp = 0.1;\nfreq = 2;\ndecay = 5;\nn = 0;\n$bm_rt = time_max = 4;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < time_max) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}",
        },
      },
      ao: 0,
      ip: 0,
      op: 180.00000733155,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 3,
      ty: 2,
      nm: "Layer 4",
      refId: "image_2",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [924.426, 478.195, 0], ix: 2, l: 2 },
        a: { a: 0, k: [237.179, 141.763, 0], ix: 1, l: 2 },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              t: 121,
              s: [0, 0, 100],
            },
            { t: 126.000005132085, s: [100, 100, 100] },
          ],
          ix: 6,
          l: 2,
          x: "var $bm_rt;\nvar amp, freq, decay, n, time_max, n, t, t, v;\namp = 0.1;\nfreq = 2;\ndecay = 5;\nn = 0;\n$bm_rt = time_max = 4;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < time_max) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}",
        },
      },
      ao: 0,
      ip: 0,
      op: 180.00000733155,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 4,
      ty: 2,
      nm: "Layer 5",
      refId: "image_3",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [924.326, 580.559, 0], ix: 2, l: 2 },
        a: { a: 0, k: [340.485, 272.545, 0], ix: 1, l: 2 },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              t: 86,
              s: [0, 0, 100],
            },
            { t: 92.0000037472368, s: [100, 100, 100] },
          ],
          ix: 6,
          l: 2,
          x: "var $bm_rt;\nvar amp, freq, decay, n, time_max, n, t, t, v;\namp = 0.1;\nfreq = 2;\ndecay = 5;\nn = 0;\n$bm_rt = time_max = 4;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < time_max) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}",
        },
      },
      ao: 0,
      ip: 0,
      op: 180.00000733155,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 5,
      ty: 2,
      nm: "Layer 6",
      refId: "image_4",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [924.326, 778.755, 0], ix: 2, l: 2 },
        a: { a: 0, k: [340.485, 269.78, 0], ix: 1, l: 2 },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              t: 51,
              s: [0, 0, 100],
            },
            { t: 57.0000023216576, s: [100, 100, 100] },
          ],
          ix: 6,
          l: 2,
          x: "var $bm_rt;\nvar amp, freq, decay, n, time_max, n, t, t, v;\namp = 0.1;\nfreq = 2;\ndecay = 5;\nn = 0;\n$bm_rt = time_max = 4;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < time_max) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}",
        },
      },
      ao: 0,
      ip: 0,
      op: 180.00000733155,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 6,
      ty: 2,
      nm: "Layer 7",
      refId: "image_5",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [924.326, 952.684, 0], ix: 2, l: 2 },
        a: { a: 0, k: [340.485, 248.277, 0], ix: 1, l: 2 },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              t: 17,
              s: [0, 0, 100],
            },
            { t: 22.0000008960784, s: [100, 100, 100] },
          ],
          ix: 6,
          l: 2,
          x: "var $bm_rt;\nvar amp, freq, decay, n, time_max, n, t, t, v;\namp = 0.1;\nfreq = 2;\ndecay = 5;\nn = 0;\n$bm_rt = time_max = 4;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < time_max) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}",
        },
      },
      ao: 0,
      ip: 0,
      op: 180.00000733155,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 7,
      ty: 2,
      nm: "Layer 8",
      refId: "image_6",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 10,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 20,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 22,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 35,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 45,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 55,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 57,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 70,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 80,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 90,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 92,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 105,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 115,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 125,
              s: [100],
            },
            { t: 127.000005172816, s: [0] },
          ],
          ix: 11,
        },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 0,
              s: [1447.07, 1383.126, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 10,
              s: [1379.07, 1343.126, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 20,
              s: [1280.07, 1285.126, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 35,
              s: [1447.07, 1383.126, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 45,
              s: [1379.07, 1343.126, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 55,
              s: [1280.07, 1285.126, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 70,
              s: [1447.07, 1383.126, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 80,
              s: [1379.07, 1343.126, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 90,
              s: [1280.07, 1285.126, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 105,
              s: [1447.07, 1383.126, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 115,
              s: [1379.07, 1343.126, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 125.000005091354, s: [1280.07, 1285.126, 0] },
          ],
          ix: 2,
          l: 2,
        },
        a: { a: 0, k: [254.68, 148.552, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 180.00000733155,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 8,
      ty: 2,
      nm: "Layer 9",
      refId: "image_7",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 10,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 20,
              s: [99],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 22,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 35,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 45,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 55,
              s: [99],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 57,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 70,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 80,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 90,
              s: [99],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 92,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 105,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 115,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 125,
              s: [99],
            },
            { t: 127.000005172816, s: [0] },
          ],
          ix: 11,
        },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 0,
              s: [260.218, 831.135, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 10,
              s: [326.718, 867.635, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 20,
              s: [428.218, 926.135, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 35,
              s: [260.218, 831.135, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 45,
              s: [326.718, 867.635, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 55,
              s: [428.218, 926.135, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 70,
              s: [260.218, 831.135, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 80,
              s: [326.718, 867.635, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 90,
              s: [428.218, 926.135, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 105,
              s: [260.218, 831.135, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 115,
              s: [326.718, 867.635, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 125.000005091354, s: [428.218, 926.135, 0] },
          ],
          ix: 2,
          l: 2,
        },
        a: { a: 0, k: [59.901, 34.591, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 180.00000733155,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 9,
      ty: 2,
      nm: "Layer 10",
      refId: "image_8",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [0, 1704.99, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 180.00000733155,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 10,
      ty: 2,
      nm: "Layer 11",
      refId: "image_9",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 10,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 20,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 22,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 35,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 45,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 55,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 57,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 70,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 80,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 90,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 92,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 105,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 115,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 125,
              s: [100],
            },
            { t: 127.000005172816, s: [0] },
          ],
          ix: 11,
        },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 0,
              s: [1609.34, 856.402, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 10,
              s: [1556.34, 887.402, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 20,
              s: [1454.34, 944.902, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 35,
              s: [1609.34, 856.402, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 45,
              s: [1556.34, 887.402, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 55,
              s: [1454.34, 944.902, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 70,
              s: [1609.34, 856.402, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 80,
              s: [1556.34, 887.402, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 90,
              s: [1454.34, 944.902, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 105,
              s: [1609.34, 856.402, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 115,
              s: [1556.34, 887.402, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 125.000005091354, s: [1454.34, 944.902, 0] },
          ],
          ix: 2,
          l: 2,
        },
        a: { a: 0, k: [106.33, 61.369, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 180.00000733155,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 11,
      ty: 2,
      nm: "Layer 12",
      refId: "image_10",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 10,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 20,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 22,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 35,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 45,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 55,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 57,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 70,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 80,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 90,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 92,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 105,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 115,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 125,
              s: [100],
            },
            { t: 127.000005172816, s: [0] },
          ],
          ix: 11,
        },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 0,
              s: [328.778, 1395.706, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 10,
              s: [409.278, 1349.206, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 20,
              s: [550.278, 1269.706, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 35,
              s: [328.778, 1395.706, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 45,
              s: [409.278, 1349.206, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 55,
              s: [550.278, 1269.706, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 70,
              s: [328.778, 1395.706, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 80,
              s: [409.278, 1349.206, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 90,
              s: [550.278, 1269.706, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 105,
              s: [328.778, 1395.706, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 115,
              s: [409.278, 1349.206, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 125.000005091354, s: [550.278, 1269.706, 0] },
          ],
          ix: 2,
          l: 2,
        },
        a: { a: 0, k: [215.781, 125.358, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 180.00000733155,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 12,
      ty: 2,
      nm: "Layer 13",
      refId: "image_11",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [930.669, 1075.817, 0], ix: 2, l: 2 },
        a: { a: 0, k: [896.581, 530.517, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 180.00000733155,
      st: -6.00000024438501,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 13,
      ty: 2,
      nm: "Layer 1",
      refId: "image_12",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [0, 1704.99, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 180.00000733155,
      st: 0,
      bm: 0,
    },
  ],
  markers: [],
};
export default animation1;
