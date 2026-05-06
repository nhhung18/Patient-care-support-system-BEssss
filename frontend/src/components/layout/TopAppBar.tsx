export function TopAppBar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-surface-container-lowest border-b border-surface-variant shadow-[0_4px_20px_rgba(25,118,210,0.05)] md:ml-[280px] md:w-[calc(100%-280px)]">
      <div className="flex items-center gap-2">
        <span 
          className="material-symbols-outlined text-primary" 
          style={{ fontVariationSettings: '"FILL" 1' }}
          aria-hidden="true"
        >
          medical_services
        </span>
        <span className="font-headline-md text-primary">MedCare Manager</span>
      </div>
      <div>
        <img 
          alt="Doctor Profile" 
          className="w-10 h-10 rounded-full object-cover border border-outline-variant" 
          width={40}
          height={40}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQns7Z-z1_AhyMgFvYpoxgnz_RxGH96D743QoLcVQAt38TP59L3N5OI62rUaOR_9RSVkQGmyYRzqlwTLtdyUXk6ONUN4HbJAw2SCWyvD6c7383wGqy4dQAy6_6oZFcCJeN9F9t3wrtQcRzqPhmrvnTuS-kGu0j2MqBHaoSPuVrau_O_m7oL44w-Ti3hQsrag-lM4TVHMnXVSzoEGZMmHYLxP3g-qa4zgwJgpSj4gJXZK7j8yyUm6V0HOpXFyL0A2MkWM0I6FSXUV0"
        />
      </div>
    </header>
  );
}

