import { TestBed } from '@angular/core/testing';
import { Button } from './button';

describe('Button', () => {
  it('coerces boolean inputs, forwards autofocus, and blocks disabled/loading clicks', async () => {
    TestBed.configureTestingModule({ declarations: [Button] });
    const fixture = TestBed.createComponent(Button);
    const emitted = vi.fn();
    fixture.componentInstance.buttonClick.subscribe(emitted);
    fixture.componentRef.setInput('autofocus', '');
    fixture.componentRef.setInput('disabled', 'false');
    await fixture.whenStable();
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.type).toBe('button');
    expect(button.autofocus).toBe(true);
    button.click();
    expect(emitted).toHaveBeenCalledTimes(1);
    for (const state of ['disabled', 'loading']) {
      fixture.componentRef.setInput(state, '');
      await fixture.whenStable();
      expect(button.disabled).toBe(true);
      button.click();
      expect(emitted).toHaveBeenCalledTimes(1);
      fixture.componentRef.setInput(state, false);
    }
    fixture.componentRef.setInput('loading', true);
    fixture.componentRef.setInput('loadingLabel', 'Saving');
    await fixture.whenStable();
    expect(button.getAttribute('aria-busy')).toBe('true');
    expect(fixture.nativeElement.querySelector('[role="status"]').textContent).toBe('Saving');
  });
});
