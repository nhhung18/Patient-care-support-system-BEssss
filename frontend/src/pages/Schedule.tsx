export function Schedule() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header & Title */}
      <div className="mb-lg">
        <h2 className="font-headline-md text-on-surface">Weekly Schedule</h2>
        <p className="font-body-sm text-on-surface-variant">Manage your shifts and patient consultations</p>
      </div>

      {/* Horizontal Calendar */}
      <section className="mb-xl overflow-x-auto no-scrollbar -mx-container-margin px-container-margin">
        <div className="flex gap-md py-xs">
          {/* Day Card Active */}
          <div className="flex-shrink-0 w-16 h-24 flex flex-col items-center justify-center rounded bg-primary-container text-on-primary-container shadow-lg shadow-primary-container/20">
            <span className="font-label-caps opacity-80">MON</span>
            <span className="font-display-lg mt-1">12</span>
          </div>

          {/* Day Card Inactive */}
          {['TUE/13', 'WED/14', 'THU/15', 'FRI/16', 'SAT/17', 'SUN/18'].map((day) => {
            const [name, date] = day.split('/');
            return (
              <div key={name} className="flex-shrink-0 w-16 h-24 flex flex-col items-center justify-center rounded bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low transition-colors cursor-pointer">
                <span className="font-label-caps text-on-surface-variant">{name}</span>
                <span className="font-display-lg text-on-surface mt-1">{date}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Chronological List */}
      <div className="space-y-lg">
        {/* Shift Header */}
        <div className="flex items-center justify-between border-l-4 border-primary pl-4">
          <div>
            <h3 className="font-title-sm text-on-surface">Main Shift</h3>
            <p className="font-body-sm text-on-surface-variant">Department: ICU</p>
          </div>
          <div className="text-right">
            <span className="font-label-caps text-primary bg-secondary-container px-3 py-1 rounded-full">Active</span>
            <p className="font-body-sm font-semibold mt-1">08:00 - 20:00</p>
          </div>
        </div>

        {/* Bento Layout for Schedule Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">

          {/* Appointment Card 1 */}
          <div className="bg-surface-container-lowest p-lg rounded shadow-[0_4px_20px_rgba(25,118,210,0.08)] border border-surface-variant flex gap-md items-start group">
            <div className="w-12 h-12 bg-surface-container-low rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">patient_list</span>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <span className="font-label-caps text-primary">09:30 AM</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-error bg-error-container px-2 py-0.5 rounded">High Priority</span>
              </div>
              <h4 className="font-title-sm text-on-surface">Sarah Jenkins</h4>
              <p className="font-body-sm text-on-surface-variant mb-3">Post-Op Checkup (Room 402)</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-primary text-white font-label-caps rounded cursor-pointer">View Vitals</button>
                <button className="px-4 py-2 border border-outline text-on-surface-variant font-label-caps rounded cursor-pointer">Reschedule</button>
              </div>
            </div>
          </div>

          {/* Appointment Card 2 */}
          <div className="bg-surface-container-lowest p-lg rounded shadow-[0_4px_20px_rgba(25,118,210,0.08)] border border-surface-variant flex gap-md items-start group">
            <div className="w-12 h-12 bg-surface-container-low rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">clinical_notes</span>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <span className="font-label-caps text-primary">11:00 AM</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E7D32] bg-[#2E7D32]/10 px-2 py-0.5 rounded">Follow-up</span>
              </div>
              <h4 className="font-title-sm text-on-surface">Michael Ross</h4>
              <p className="font-body-sm text-on-surface-variant mb-3">Dialysis Consultation</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-primary text-white font-label-caps rounded cursor-pointer">Start Session</button>
              </div>
            </div>
          </div>

          {/* Break Slot */}
          <div className="md:col-span-2 bg-surface-container-low border-2 border-dashed border-outline-variant p-md rounded flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-on-secondary-container">coffee</span>
            <span className="font-body-md text-on-secondary-container">Staff Break • 12:30 PM - 01:15 PM</span>
          </div>

          {/* Appointment Card 3 */}
          <div className="bg-surface-container-lowest p-lg rounded shadow-[0_4px_20px_rgba(25,118,210,0.08)] border border-surface-variant flex gap-md items-start group">
            <div className="w-12 h-12 bg-surface-container-low rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">emergency_home</span>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <span className="font-label-caps text-primary">02:45 PM</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-100 px-2 py-0.5 rounded">New Admission</span>
              </div>
              <h4 className="font-title-sm text-on-surface">Elena Rodriguez</h4>
              <p className="font-body-sm text-on-surface-variant mb-3">Triage & Initial Assessment</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-primary text-white font-label-caps rounded cursor-pointer">Assign Bed</button>
              </div>
            </div>
          </div>

          {/* Appointment Card 4 */}
          <div className="bg-surface-container-lowest p-lg rounded shadow-[0_4px_20px_rgba(25,118,210,0.08)] border border-surface-variant flex gap-md items-start group">
            <div className="w-12 h-12 bg-surface-container-low rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">family_history</span>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <span className="font-label-caps text-primary">04:30 PM</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-on-secondary-container bg-secondary-container/30 px-2 py-0.5 rounded">Routine</span>
              </div>
              <h4 className="font-title-sm text-on-surface">David Chen</h4>
              <p className="font-body-sm text-on-surface-variant mb-3">Annual Physical Exam</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-outline text-on-surface-variant font-label-caps rounded cursor-pointer">Mark Ready</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
