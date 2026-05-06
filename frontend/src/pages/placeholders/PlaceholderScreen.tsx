import { Header } from '../../components/layout/Header';

export function PlaceholderScreen({ title }: { title: string }) {
  return (
    <>
      <Header title={title} showBack />
      <div className="max-w-4xl mx-auto px-container-margin pt-xl text-center">
        <div className="w-24 h-24 bg-blue-50 text-blue-300 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-5xl">construction</span>
        </div>
        <h2 className="text-headline-md text-on-surface mb-2">{title}</h2>
        <p className="text-body-md text-on-surface-variant">Tính năng này đang được phát triển.</p>
      </div>
    </>
  );
}
