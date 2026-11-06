// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Page - Status Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type StatusPageStatusUtilityActionId = "refresh-status-1";

export interface StatusPageStatusUtilityProps {
  actions?: {
    "refresh-status-1"?: () => void;
  };

}

export type StatusPageStatusUtilityActionCallbacks = NonNullable<StatusPageStatusUtilityProps["actions"]>;

export function StatusPageStatusUtility({ actions }: StatusPageStatusUtilityProps) {
  return (
    <>
      {/* Top decorative navbar header (no undeclared actionable controls) */}
        <header className="w-full bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm shadow-sm">
                SU
              </div>
              <div className="flex flex-col">
                <span className="text-base font-semibold text-slate-800 tracking-tight leading-none">Status Utility</span>
                <span className="text-xs text-slate-500 font-mono mt-1">/status</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                Operational
              </span>
            </div>
          </div>
        </header>
      
        {/* Main Root Surface Area */}
        <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12 flex flex-col justify-center">
          {/* Surface Container */}
          <div data-surface-id="SURF_STATUS_PAGE" className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden" data-setfarm-element-ref="E000001" data-observable-refs="OBS_REFRESH_STATUS_OBS_STATUS_PERSISTED_ACROSS_RELOAD OBS_REFRESH_STATUS_OBS_STATUS_TEXT OBS_REFRESH_STATUS_OBS_STATUS_VALUE OBS_REFRESH_STATUS_OBS_STAYS_ON_STATUS_ROUTE">
            {/* Surface Header Banner */}
            <div className="px-8 py-6 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-xl font-bold text-slate-900 tracking-tight">Status Monitor</h1>
                <p className="text-sm text-slate-500 mt-1">Real-time status check and telemetry inspection</p>
              </div>
              {/* Refresh Button: Physical Control Slot */}
              <div>
                <button type="button" data-action="ACT_REFRESH_STATUS" data-control-slot="CSLOT_REFRESH_STATUS_REFRESH_BUTTON" className="inline-flex items-center justify-center px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-setfarm-element-ref="E000002" data-observable-refs="OBS_REFRESH_STATUS_OBS_REFRESH_BUTTON_AVAILABLE" data-action-id="refresh-status-1" onClick={actions?.["refresh-status-1"]}>
                  Refresh Status
                </button>
              </div>
            </div>
      
            {/* Surface Body Content */}
            <div className="p-8 space-y-6">
              {/* Status Display Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Service Status</span>
                  <div className="mt-2 flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-slate-800">Operational</span>
                    <span className="text-xs text-emerald-600 font-medium">99.98% uptime</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">All primary subsystems communicating normally.</p>
                </div>
      
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Current Route</span>
                  <div className="mt-2 flex items-baseline space-x-2">
                    <span className="text-2xl font-mono font-bold text-slate-800">/status</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Single-page utility endpoint.</p>
                </div>
              </div>
      
              {/* Refresh Observation Context & Notification Elements */}
              <div className="border-t border-slate-100 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Sync State</h2>
                  <span className="text-xs text-slate-400">Target route: /status</span>
                </div>
      
                {/* Observable target representation: Status Text & Value */}
                <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                    <div>
                      <span className="text-sm font-medium text-slate-800">Status State:</span>
                      <span className="ml-1 text-sm font-semibold text-indigo-700">Status refreshed</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500">Current value:</span>
                    <span className="ml-1 text-xs font-mono font-semibold px-2 py-0.5 rounded bg-white border border-indigo-200 text-indigo-800">refreshed</span>
                  </div>
                </div>
              </div>
            </div>
      
            {/* Surface Footer Information */}
            <div className="px-8 py-4 bg-slate-50/80 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 gap-2">
              <span>Persistent storage sync enabled across browser reloads</span>
              <span className="font-mono">Route: /status</span>
            </div>
          </div>
        </main>
      
        {/* Decorative Footer (no actionable links or buttons) */}
        <footer className="w-full bg-white border-t border-slate-200 py-4">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-xs text-slate-500">
            <span>Status Utility System © 2025</span>
            <span>Desktop Monitoring Client</span>
          </div>
        </footer>
    </>
  );
}
