
function Zviditelnit(cislo)
{
    indexList.forEach(item => item.classList.add('hidden'));
    indexList[cislo-1].classList.remove('hidden');
}

Zviditelnit(1);

index1continue.addEventListener('click', ()=> {Zviditelnit(2)});
index2continue.addEventListener('click', ()=> {Zviditelnit(3)});