const note = document.querySelector('#personal-note');
if (note) {
  const savedNote = localStorage.getItem('fosil-cerita-personal-note');
  if (savedNote !== null) note.value = savedNote;
  document.querySelector('#save-note').addEventListener('click', () => {
    localStorage.setItem('fosil-cerita-personal-note', note.value);
    document.querySelector('#saved-status').textContent = 'Tersimpan di browser ini';
  });
}
const museumBoxes = [...document.querySelectorAll('[data-museum]')];
function updateProgress() {
  const count = museumBoxes.filter(box => box.checked).length;
  const progress = document.querySelector('[data-progress]');
  if (progress) progress.textContent = `${count}/${museumBoxes.length} dikunjungi`;
}
museumBoxes.forEach(box => {
  box.checked = localStorage.getItem('museum-' + box.dataset.museum) === 'true';
  box.addEventListener('change', () => {
    localStorage.setItem('museum-' + box.dataset.museum, box.checked);
    updateProgress();
  });
});
updateProgress();
