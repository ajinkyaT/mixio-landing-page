/* First make sure that you have installed the package */

  /* If you are using yarn */
  // yarn add @calcom/embed-react

  /* If you are using npm */
  // npm install @calcom/embed-react
  
  import Cal, { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  export default function MyApp() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"15min"});
		cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#E7554B"},"dark":{"cal-brand":"#E7554B"}},"hideEventTypeDetails":true,"layout":"month_view"});
	  })();
	}, [])
	return <Cal namespace="15min"
	  calLink="mixio/15min"
	  style={{width:"100%",height:"100%",overflow:"scroll"}}
	  config={{"layout":"month_view","theme":"auto"}}
    
	  
	/>;
  };
  